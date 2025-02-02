var e,t,n,i,a=function(e,t){return {name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},r=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},o=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)));};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0);},u=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t);}),!0);},c="function"==typeof WeakSet?new WeakSet:new Set,f=function(e,t,n){var i;return function(){t.value>=0&&(n||c.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)));}},s=-1,m=function(){return "hidden"===document.visibilityState?0:1/0},d=function(){o((function(e){var t=e.timeStamp;s=t;}),!0);},v=function(){return s<0&&(s=m(),d(),u((function(){setTimeout((function(){s=m(),d();}),0);}))),{get firstHiddenTime(){return s}}},p=function(e,t){var n,i=v(),o=a("FCP"),s=function(e){"first-contentful-paint"===e.name&&(d&&d.disconnect(),e.startTime<i.firstHiddenTime&&(o.value=e.startTime,o.entries.push(e),c.add(o),n()));},m=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],d=m?null:r("paint",s);(m||d)&&(n=f(e,o,t),m&&s(m),u((function(i){o=a("FCP"),n=f(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,c.add(o),n();}));}));})));},l=!1,h=-1,y=function(e,t){l||(p((function(e){h=e.value;})),l=!0);var n,i=function(t){h>-1&&e(t);},c=a("CLS",0),s=0,m=[],d=function(e){if(!e.hadRecentInput){var t=m[0],i=m[m.length-1];s&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(s+=e.value,m.push(e)):(s=e.value,m=[e]),s>c.value&&(c.value=s,c.entries=m,n());}},v=r("layout-shift",d);v&&(n=f(i,c,t),o((function(){v.takeRecords().map(d),n();})),u((function(){s=0,h=-1,c=a("CLS",0),n=f(i,c,t);})));},g={passive:!0,capture:!0},T=new Date,E=function(i,a){e||(e=a,t=i,n=new Date,L(removeEventListener),S());},S=function(){if(t>=0&&t<n-T){var a={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+t};i.forEach((function(e){e(a);})),i=[];}},w=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){E(e,t),a();},i=function(){a();},a=function(){removeEventListener("pointerup",n,g),removeEventListener("pointercancel",i,g);};addEventListener("pointerup",n,g),addEventListener("pointercancel",i,g);}(t,e):E(t,e);}},L=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,w,g)}));},b=function(n,s){var m,d=v(),p=a("FID"),l=function(e){e.startTime<d.firstHiddenTime&&(p.value=e.processingStart-e.startTime,p.entries.push(e),c.add(p),m());},h=r("first-input",l);m=f(n,p,s),h&&o((function(){h.takeRecords().map(l),h.disconnect();}),!0),h&&u((function(){var r;p=a("FID"),m=f(n,p,s),i=[],t=-1,e=null,L(addEventListener),r=l,i.push(r),S();}));},F=function(e,t){var n,i=v(),s=a("LCP"),m=function(e){var t=e.startTime;t<i.firstHiddenTime&&(s.value=t,s.entries.push(e)),n();},d=r("largest-contentful-paint",m);if(d){n=f(e,s,t);var p=function(){c.has(s)||(d.takeRecords().map(m),d.disconnect(),c.add(s),n());};["keydown","click"].forEach((function(e){addEventListener(e,p,{once:!0,capture:!0});})),o(p,!0),u((function(i){s=a("LCP"),n=f(e,s,t),requestAnimationFrame((function(){requestAnimationFrame((function(){s.value=performance.now()-i.timeStamp,c.add(s),n();}));}));}));}},k=function(e){var t,n=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n);}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t);};

var webVitals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getCLS: y,
  getFCP: p,
  getFID: b,
  getLCP: F,
  getTTFB: k
});

const MS_UNIT = 'ms';

// borrowed from the vitals extension
// https://github.com/GoogleChrome/web-vitals-extension/blob/master/src/browser_action/vitals.js#L20-L23
const METRIC_CONFIG = new Map([
  [
    'CLS',
    {
      thresholds: {
        good: 0.1,
        needsImprovement: 0.25,
      },
      observerEntryType: 'layout-shift',
      explainerURL: 'https://web.dev/cls/',
      longName: 'Cumulative Layout Shift',
      roundFn: (value) => Math.floor(value * 100) / 100,
    },
  ],
  [
    'FCP',
    {
      thresholds: {
        good: 2500,
      },
      observerEntryType: 'paint',
      explainerURL: 'https://web.dev/fcp/',
      unit: MS_UNIT,
      longName: 'First Contentful Paint',
    },
  ],
  [
    'FID',
    {
      thresholds: {
        good: 100,
        needsImprovement: 300,
      },
      observerEntryType: 'first-input',
      explainerURL: 'https://web.dev/fid/',
      unit: MS_UNIT,
      longName: 'First Input Delay',
    },
  ],
  [
    'LCP',
    {
      thresholds: {
        good: 2500,
        needsImprovement: 4000,
      },
      observerEntryType: 'paint',
      explainerURL: 'https://web.dev/lcp/',
      unit: MS_UNIT,
      longName: 'Largest Contentful Paint',
    },
  ],
  [
    'TTFB',
    {
      thresholds: {
        good: 2500,
      },
      explainerURL: 'https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/',
      unit: MS_UNIT,
      longName: 'Time to First Byte',
    },
  ],
]);

const GENERAL_ATTRIBUTES = ['class', 'style'];
const CONFIG_ATTRIBUTES = ['show-unsupported', 'show-metric-name'];

class WebVitals extends HTMLElement {
  constructor() {
    super();

    this.unsupportedMetrics = [];
    this.metrics = new Map();
  }

  connectedCallback() {
    const metricAttributes = this.getMetricAttributes();
    const metricList = metricAttributes.length
      ? metricAttributes
      : [...METRIC_CONFIG.keys()];

    this.metrics = this.getMetrics(metricList);

    this.render();

    for (let metricConfig of this.metrics.values()) {
      const { name, getWebVitalsValue } = metricConfig;

      getWebVitalsValue((metric) => {
        this.metrics.set(name, {
          ...metricConfig,
          ...metric,
        });
        this.render();
      }, true);
    }
  }

  getMetricAttributes() {
    return this.getAttributeNames()
      .filter(
        (attr) =>
          !GENERAL_ATTRIBUTES.includes(attr) &&
          !CONFIG_ATTRIBUTES.includes(attr)
      )
      .map((attr) => attr.toUpperCase());
  }

  getMetrics(metricList) {
    return new Map(
      metricList.reduce((acc, metricName) => {
        // exclude metric when it's not supported by web-vitals
        const getWebVitalsValue = webVitals[`get${metricName}`];
        if (!getWebVitalsValue) {
          console.error(`${metricName} is not supported by '<web-vitals />'`);
          this.unsupportedMetrics.push(metricName);
          return acc;
        }

        // exclude metric when it's not supported
        const metricConfig = METRIC_CONFIG.get(metricName);
        const { observerEntryType } = metricConfig;
        if (
          observerEntryType &&
          !PerformanceObserver.supportedEntryTypes.includes(observerEntryType)
        ) {
          console.error(`${metricName} is not supported by your browser`);
          this.unsupportedMetrics.push(metricName);
          return acc;
        }

        return [
          ...acc,
          [
            metricName,
            {
              ...METRIC_CONFIG.get(metricName),
              getWebVitalsValue,
              name: metricName,
            },
          ],
        ];
      }, [])
    );
  }

  render() {
    this.innerHTML = `<div class="web-vitals">
      <dl>
        ${[...this.metrics]
          .map(([key, metric]) => {
            const { explainerURL, longName, roundFn, thresholds, unit, value } =
              metric;
            let classes = '';
            const roundValue = roundFn || Math.floor;
            const { good, needsImprovement } = thresholds;

            if (value) {
              classes += 'is-final ';
              let score = 'is-poor';
              if (needsImprovement && value <= needsImprovement) {
                score = 'needs-improvement';
              }
              if (value <= good) {
                score = 'is-good';
              }
              classes += score;
            }

            return `
            <div class="${classes}">
              <dt>
                ${
                  this.hasAttribute('show-metric-name')
                    ? `${longName} (<a href="${explainerURL}">${key}</a>)`
                    : `<a href="${explainerURL}">${key}</a>`
                }
              </dt>
              <dd>${
                value ? `${roundValue(value)}${unit ? unit : ''}` : '...'
              }</dd>
            </div>
          `;
          })
          .join('')}
      </dl>
        ${
          this.unsupportedMetrics.length &&
          this.hasAttribute('show-unsupported')
            ? `<p>Not supported: ${this.unsupportedMetrics.join(', ')}</p>`
            : ''
        }
    </div>`;
  }
}

customElements.define('web-vitals', WebVitals);
