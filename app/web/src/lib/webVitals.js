/**
 * Web Vitals tracking for performance monitoring
 * Tracks Core Web Vitals metrics if Google Analytics is enabled
 */

export function reportWebVitals(metric) {
  if (window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`${metric.name}:`, metric.value);
  }
}

export function loadWebVitalsReporter() {
  if (!import.meta.env.VITE_ENABLE_ANALYTICS) return;

  // Dynamically import web-vitals library
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(reportWebVitals);
    getFID(reportWebVitals);
    getFCP(reportWebVitals);
    getLCP(reportWebVitals);
    getTTFB(reportWebVitals);
  });
}
