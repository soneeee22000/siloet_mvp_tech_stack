# PowerShell script to push changes to GitHub for Siloett tech stack site
# Usage: .\push.ps1 [commit message]
# Example: .\push.ps1 "Update: Added new feature"

param(
    [string]$CommitMessage = "Update: Code changes"
)

# Navigate to project directory
Set-Location $PSScriptRoot

Write-Host "=== Siloett Tech Stack - Git Push Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if there are any changes
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "No changes to commit. Working tree is clean." -ForegroundColor Yellow
    exit 0
}

# Show current status
Write-Host "Current changes:" -ForegroundColor Green
git status --short
Write-Host ""

# Add all changes
Write-Host "Staging all changes..." -ForegroundColor Green
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to stage changes" -ForegroundColor Red
    exit 1
}

# Commit changes
Write-Host "Committing changes with message: '$CommitMessage'" -ForegroundColor Green
git commit -m $CommitMessage
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to commit changes" -ForegroundColor Red
    exit 1
}

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to push to GitHub" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "Repository: https://github.com/soneeee22000/siloet_mvp_tech_stack" -ForegroundColor Cyan
