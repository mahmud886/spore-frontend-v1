"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Core Web Vitals reporting
    const sendWebVitals = ({ name, value, id }) => {
      // In production, send to your analytics service
      if (process.env.NODE_ENV === "development") {
        console.log(`[Web Vitals] ${name}: ${Math.round(name === "CLS" ? value * 1000 : value)}`);
      }

      // Example: Send to Google Analytics or custom endpoint
      // gtag('event', name, {
      //   value: Math.round(name === 'CLS' ? value * 1000 : value),
      //   metric_id: id,
      //   metric_value: value,
      //   metric_delta: value,
      // });
    };

    // Import and initialize web vitals
    import("web-vitals")
      .then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(sendWebVitals);
        onFID(sendWebVitals);
        onFCP(sendWebVitals);
        onLCP(sendWebVitals);
        onTTFB(sendWebVitals);
      })
      .catch(() => {
        // Fallback if web-vitals package is not available
        console.warn("Web Vitals package not available");
      });

    // Performance monitoring
    const measurePerformance = () => {
      if ("performance" in window) {
        // Measure First Contentful Paint
        const fcp = performance.getEntriesByName("first-contentful-paint")[0];
        if (fcp) {
          console.log(`[Performance] FCP: ${Math.round(fcp.startTime)}ms`);
        }

        // Measure Largest Contentful Paint
        const lcp = performance.getEntriesByType("largest-contentful-paint")[0];
        if (lcp) {
          console.log(`[Performance] LCP: ${Math.round(lcp.startTime)}ms`);
        }

        // Measure Cumulative Layout Shift
        if ("layoutShift" in performance) {
          const cls = performance.getEntriesByType("layout-shift");
          if (cls.length > 0) {
            const totalCLS = cls.reduce((sum, entry) => sum + entry.value, 0);
            console.log(`[Performance] CLS: ${totalCLS.toFixed(4)}`);
          }
        }
      }
    };

    // Run performance measurement after page load
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    // Clean up event listeners
    return () => {
      window.removeEventListener("load", measurePerformance);
    };
  }, []);

  return null; // This component doesn't render anything
}
