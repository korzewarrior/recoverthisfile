// Footer component for RecoverThisFile website
document.addEventListener('DOMContentLoaded', function() {
    // Find the footer element
    const footerElement = document.querySelector('footer');
    
    if (footerElement) {
        // Inject the shared footer HTML
        footerElement.innerHTML = `
            <div class="compliance">
                <span class="compliance-badge">ISO 27001</span>
                <span class="compliance-badge">GDPR</span>
                <span class="compliance-badge">HIPAA</span>
                <span class="compliance-badge">SOC 2</span>
                <span class="compliance-badge">NIST 800-88</span>
            </div>
            <p>Files are processed using proprietary quantum reconstruction architecture. No data is transmitted externally.</p>
            <p>© 2025 RecoverThisFile.com | <a href="index.html">Recover</a> | <a href="privacy-policy.html">Privacy Policy</a> | <a href="terms-of-service.html">Terms of Service</a></p>
        `;
    }
}); 