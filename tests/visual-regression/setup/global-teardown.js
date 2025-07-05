/**
 * A Hacker's Brand - Visual Regression Global Teardown
 * Cleanup and reporting after visual testing
 */

import fs from 'fs';
import path from 'path';

async function globalTeardown(config) {
  console.log('🧹 Cleaning up visual regression testing environment...');
  
  try {
    // Generate final test report summary
    const resultsDir = 'test-results/visual-regression';
    const reportFiles = [
      'visual-diff-report.json',
      'visual-diffs.json',
      'results.json'
    ];
    
    const consolidatedReport = {
      timestamp: new Date().toISOString(),
      testRun: {
        environment: process.env.NODE_ENV || 'test',
        nodeVersion: process.version,
        platform: process.platform
      },
      reports: {}
    };
    
    // Collect all generated reports
    for (const reportFile of reportFiles) {
      const reportPath = path.join(resultsDir, reportFile);
      if (fs.existsSync(reportPath)) {
        try {
          const reportData = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
          consolidatedReport.reports[reportFile.replace('.json', '')] = reportData;
        } catch (error) {
          console.warn(`⚠️  Could not read report ${reportFile}: ${error.message}`);
        }
      }
    }
    
    // Calculate overall statistics
    const overallStats = {
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      skippedTests: 0,
      visualDiffs: 0,
      duration: 0
    };
    
    if (consolidatedReport.reports['visual-diff-report']) {
      const summary = consolidatedReport.reports['visual-diff-report'].summary;
      overallStats.totalTests = summary.total || 0;
      overallStats.passedTests = summary.passed || 0;
      overallStats.failedTests = summary.failed || 0;
      overallStats.skippedTests = summary.skipped || 0;
      overallStats.visualDiffs = summary.visualDiffs || 0;
      overallStats.duration = consolidatedReport.reports['visual-diff-report'].duration || 0;
    }
    
    consolidatedReport.statistics = overallStats;
    
    // Save consolidated report
    fs.writeFileSync(
      path.join(resultsDir, 'consolidated-report.json'),
      JSON.stringify(consolidatedReport, null, 2)
    );
    
    // Generate final summary
    console.log('\n📊 Final Visual Regression Test Summary');
    console.log('═'.repeat(50));
    console.log(`Total Tests: ${overallStats.totalTests}`);
    console.log(`✅ Passed: ${overallStats.passedTests}`);
    console.log(`❌ Failed: ${overallStats.failedTests}`);
    console.log(`⏭️  Skipped: ${overallStats.skippedTests}`);
    console.log(`🎨 Visual Diffs: ${overallStats.visualDiffs}`);
    console.log(`⏱️  Duration: ${(overallStats.duration / 1000).toFixed(2)}s`);
    console.log('═'.repeat(50));
    
    // Clean up temporary files
    const tempFiles = [
      path.join(resultsDir, 'setup-metadata.json')
    ];
    
    for (const tempFile of tempFiles) {
      if (fs.existsSync(tempFile)) {
        try {
          fs.unlinkSync(tempFile);
        } catch (error) {
          console.warn(`⚠️  Could not delete temp file ${tempFile}: ${error.message}`);
        }
      }
    }
    
    // Archive old test results if in CI
    if (process.env.CI) {
      const archiveDir = path.join(resultsDir, 'archive');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const archivePath = path.join(archiveDir, `test-run-${timestamp}`);
      
      fs.mkdirSync(archivePath, { recursive: true });
      
      // Move current results to archive
      const filesToArchive = fs.readdirSync(resultsDir).filter(file => 
        !file.startsWith('archive') && 
        fs.statSync(path.join(resultsDir, file)).isFile()
      );
      
      for (const file of filesToArchive) {
        const sourcePath = path.join(resultsDir, file);
        const destPath = path.join(archivePath, file);
        try {
          fs.copyFileSync(sourcePath, destPath);
        } catch (error) {
          console.warn(`⚠️  Could not archive ${file}: ${error.message}`);
        }
      }
      
      console.log(`📦 Test results archived to: ${archivePath}`);
    }
    
    // Generate exit code based on test results
    const exitCode = overallStats.failedTests > 0 ? 1 : 0;
    
    if (exitCode === 0) {
      console.log('🎉 All visual regression tests completed successfully!');
    } else {
      console.log('🚨 Visual regression tests completed with failures.');
      console.log(`Check the reports in ${resultsDir} for details.`);
    }
    
    // Set process exit code for CI
    if (process.env.CI) {
      process.exitCode = exitCode;
    }
    
  } catch (error) {
    console.error('❌ Visual regression teardown failed:', error);
    process.exitCode = 1;
  }
  
  console.log('✅ Visual regression teardown complete');
}

export default globalTeardown;