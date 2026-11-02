/**
 * AIRSIGHT PRO - ADVANCED AIR QUALITY INTELLIGENCE & FORECASTING SUITE
 * Multi-State Real-Time CAAQMS Simulation, CPCB NAQI Engine & Neomorphic Visualizer
 */

// ==========================================
// 1. COMPREHENSIVE NATIONAL AIR QUALITY DATA
// ==========================================
const REGIONS_DATA = {
  "Delhi NCR": [
    { city: "Delhi (Central)", base: [142, 230, 58, 32, 18, 1.8], temp: 24.2, hum: 68, wind: "4.2 km/h NW", press: 1014 },
    { city: "Noida", base: [154, 245, 62, 30, 21, 2.1], temp: 24.5, hum: 70, wind: "3.8 km/h NW", press: 1013 },
    { city: "Gurugram", base: [136, 218, 52, 36, 17, 1.9], temp: 25.0, hum: 65, wind: "4.5 km/h W", press: 1014 }
  ],
  "Maharashtra": [
    { city: "Mumbai (Colaba)", base: [72, 122, 38, 24, 14, 1.1], temp: 31.2, hum: 78, wind: "12.4 km/h WSW", press: 1011 },
    { city: "Pune", base: [54, 92, 29, 28, 10, 0.9], temp: 28.5, hum: 58, wind: "6.8 km/h W", press: 1012 },
    { city: "Nagpur", base: [66, 110, 31, 29, 15, 1.0], temp: 32.0, hum: 45, wind: "5.2 km/h NE", press: 1010 }
  ],
  "Telangana": [
    { city: "Hyderabad (Sanathnagar)", base: [44, 78, 22, 32, 9, 0.8], temp: 30.4, hum: 54, wind: "8.1 km/h ESE", press: 1012 },
    { city: "Warangal", base: [36, 62, 18, 28, 8, 0.6], temp: 31.1, hum: 52, wind: "6.5 km/h E", press: 1011 }
  ],
  "Karnataka": [
    { city: "Bengaluru (BTM Layout)", base: [31, 54, 19, 35, 7, 0.7], temp: 26.2, hum: 62, wind: "9.5 km/h E", press: 1014 },
    { city: "Mysuru", base: [22, 40, 14, 29, 5, 0.5], temp: 27.0, hum: 65, wind: "7.2 km/h ESE", press: 1013 }
  ],
  "Tamil Nadu": [
    { city: "Chennai (Alandur)", base: [41, 68, 21, 25, 9, 0.7], temp: 32.5, hum: 82, wind: "14.2 km/h SE", press: 1009 },
    { city: "Coimbatore", base: [28, 48, 16, 28, 6, 0.5], temp: 28.8, hum: 60, wind: "8.4 km/h SW", press: 1012 }
  ],
  "West Bengal": [
    { city: "Kolkata (Victoria)", base: [108, 178, 48, 27, 18, 1.5], temp: 29.4, hum: 76, wind: "5.6 km/h NNE", press: 1012 },
    { city: "Siliguri", base: [52, 86, 22, 24, 11, 0.8], temp: 23.8, hum: 68, wind: "4.8 km/h NE", press: 1014 }
  ],
  "Uttar Pradesh": [
    { city: "Lucknow (Talkatora)", base: [132, 210, 46, 31, 18, 1.7], temp: 25.5, hum: 62, wind: "4.1 km/h WNW", press: 1013 },
    { city: "Kanpur", base: [146, 235, 54, 29, 22, 2.0], temp: 26.0, hum: 64, wind: "3.9 km/h W", press: 1013 },
    { city: "Varanasi", base: [124, 196, 42, 33, 16, 1.6], temp: 26.8, hum: 60, wind: "4.6 km/h NW", press: 1012 }
  ],
  "Gujarat": [
    { city: "Ahmedabad (Maninagar)", base: [86, 148, 42, 35, 17, 1.3], temp: 33.2, hum: 42, wind: "7.5 km/h WSW", press: 1011 },
    { city: "Surat", base: [70, 118, 36, 30, 15, 1.1], temp: 32.8, hum: 68, wind: "10.1 km/h W", press: 1010 }
  ],
  "Rajasthan": [
    { city: "Jaipur (Adarsh Nagar)", base: [96, 164, 35, 37, 14, 1.2], temp: 29.5, hum: 38, wind: "6.2 km/h NW", press: 1013 },
    { city: "Jodhpur", base: [80, 150, 27, 34, 12, 1.0], temp: 31.0, hum: 32, wind: "7.0 km/h WNW", press: 1012 }
  ],
  "Punjab": [
    { city: "Amritsar", base: [116, 188, 38, 29, 16, 1.4], temp: 22.4, hum: 66, wind: "5.1 km/h NW", press: 1015 },
    { city: "Ludhiana", base: [126, 202, 42, 27, 18, 1.6], temp: 23.0, hum: 64, wind: "4.7 km/h NW", press: 1014 }
  ],
  "Kerala": [
    { city: "Thiruvananthapuram", base: [21, 38, 12, 24, 5, 0.4], temp: 30.2, hum: 84, wind: "11.0 km/h W", press: 1011 },
    { city: "Kochi", base: [27, 49, 17, 26, 7, 0.6], temp: 31.0, hum: 80, wind: "12.5 km/h WNW", press: 1010 }
  ],
  "Madhya Pradesh": [
    { city: "Bhopal (T.T. Nagar)", base: [66, 112, 28, 31, 13, 0.9], temp: 29.8, hum: 48, wind: "6.0 km/h NE", press: 1012 },
    { city: "Indore", base: [72, 124, 33, 33, 14, 1.0], temp: 30.2, hum: 46, wind: "6.8 km/h NNE", press: 1012 }
  ],
  "Bihar": [
    { city: "Patna (Muradpur)", base: [156, 252, 53, 31, 21, 2.2], temp: 26.5, hum: 65, wind: "3.7 km/h E", press: 1013 }
  ],
  "Assam": [
    { city: "Guwahati (Pan Bazaar)", base: [45, 76, 19, 26, 9, 0.7], temp: 25.1, hum: 74, wind: "4.2 km/h NE", press: 1014 }
  ]
};

// CPCB 24-hr Safe Limits (µg/m³; CO in mg/m³)
const CPCB_STANDARDS = {
  'PM2.5': 60,
  'PM10': 100,
  'NO₂': 80,
  'O₃': 100,
  'SO₂': 80,
  'CO': 2.0,
  'AQI': 100
};

const POLLUTANT_PALETTE = {
  'PM2.5': '#8e76ff',
  'PM10': '#38bdf8',
  'NO₂': '#00e5a3',
  'O₃': '#f59e0b',
  'SO₂': '#06b6d4',
  'CO': '#f43f5e',
  'AQI': '#c084fc'
};

// Application State
let currentSelectedState = 'Delhi NCR';
let currentSelectedCity = 'Delhi (Central)';
let currentTemporalDays = 14;
let currentChartMetric = 'PM2.5';
let isLiveStreaming = true;
let liveStreamInterval = null;
let currentDataset = [];
let trendChartInstance = null;
let mixChartInstance = null;
let forecastChartInstance = null;

// ==========================================
// 2. CPCB NAQI ENGINE (Official Sub-Indices)
// ==========================================
function calcSubIndex(val, breakpoints) {
  for (let b of breakpoints) {
    if (val >= b.cLow && val <= b.cHigh) {
      return Math.round(((b.iHigh - b.iLow) / (b.cHigh - b.cLow)) * (val - b.cLow) + b.iLow);
    }
  }
  return val > 250 ? 450 : 50;
}

function calculateIndianAQI(pm25, pm10, no2, o3, so2, co) {
  // Breakpoint tables (cLow, cHigh, iLow, iHigh)
  const bp_pm25 = [
    { cLow: 0, cHigh: 30, iLow: 0, iHigh: 50 },
    { cLow: 31, cHigh: 60, iLow: 51, iHigh: 100 },
    { cLow: 61, cHigh: 90, iLow: 101, iHigh: 200 },
    { cLow: 91, cHigh: 120, iLow: 201, iHigh: 300 },
    { cLow: 121, cHigh: 250, iLow: 301, iHigh: 400 },
    { cLow: 251, cHigh: 500, iLow: 401, iHigh: 500 }
  ];
  const bp_pm10 = [
    { cLow: 0, cHigh: 50, iLow: 0, iHigh: 50 },
    { cLow: 51, cHigh: 100, iLow: 51, iHigh: 100 },
    { cLow: 101, cHigh: 250, iLow: 101, iHigh: 200 },
    { cLow: 251, cHigh: 350, iLow: 201, iHigh: 300 },
    { cLow: 351, cHigh: 430, iLow: 301, iHigh: 400 },
    { cLow: 431, cHigh: 600, iLow: 401, iHigh: 500 }
  ];
  const bp_no2 = [
    { cLow: 0, cHigh: 40, iLow: 0, iHigh: 50 },
    { cLow: 41, cHigh: 80, iLow: 51, iHigh: 100 },
    { cLow: 81, cHigh: 180, iLow: 101, iHigh: 200 },
    { cLow: 181, cHigh: 280, iLow: 201, iHigh: 300 },
    { cLow: 281, cHigh: 400, iLow: 301, iHigh: 400 },
    { cLow: 401, cHigh: 500, iLow: 401, iHigh: 500 }
  ];
  const bp_o3 = [
    { cLow: 0, cHigh: 50, iLow: 0, iHigh: 50 },
    { cLow: 51, cHigh: 100, iLow: 51, iHigh: 100 },
    { cLow: 101, cHigh: 168, iLow: 101, iHigh: 200 },
    { cLow: 169, cHigh: 208, iLow: 201, iHigh: 300 },
    { cLow: 209, cHigh: 748, iLow: 301, iHigh: 400 },
    { cLow: 749, cHigh: 1000, iLow: 401, iHigh: 500 }
  ];
  const bp_so2 = [
    { cLow: 0, cHigh: 40, iLow: 0, iHigh: 50 },
    { cLow: 41, cHigh: 80, iLow: 51, iHigh: 100 },
    { cLow: 81, cHigh: 380, iLow: 101, iHigh: 200 },
    { cLow: 381, cHigh: 800, iLow: 201, iHigh: 300 },
    { cLow: 801, cHigh: 1600, iLow: 301, iHigh: 400 },
    { cLow: 1601, cHigh: 2000, iLow: 401, iHigh: 500 }
  ];
  const bp_co = [
    { cLow: 0, cHigh: 1.0, iLow: 0, iHigh: 50 },
    { cLow: 1.1, cHigh: 2.0, iLow: 51, iHigh: 100 },
    { cLow: 2.1, cHigh: 10.0, iLow: 101, iHigh: 200 },
    { cLow: 10.1, cHigh: 17.0, iLow: 201, iHigh: 300 },
    { cLow: 17.1, cHigh: 34.0, iLow: 301, iHigh: 400 },
    { cLow: 34.1, cHigh: 50.0, iLow: 401, iHigh: 500 }
  ];

  const subIndices = [
    { name: 'PM2.5', val: calcSubIndex(pm25, bp_pm25) },
    { name: 'PM10', val: calcSubIndex(pm10, bp_pm10) },
    { name: 'NO₂', val: calcSubIndex(no2, bp_no2) },
    { name: 'O₃', val: calcSubIndex(o3, bp_o3) },
    { name: 'SO₂', val: calcSubIndex(so2, bp_so2) },
    { name: 'CO', val: calcSubIndex(co, bp_co) }
  ];

  subIndices.sort((a, b) => b.val - a.val);
  return {
    aqi: Math.min(500, Math.max(10, subIndices[0].val)),
    dominant: subIndices[0].name
  };
}

function getAqiMeta(aqi) {
  if (aqi <= 50) {
    return {
      category: 'GOOD',
      color: '#22c55e',
      class: 'status-good',
      headline: 'Air Quality is Clean & Healthy',
      desc: 'Minimal impact. Clean mountain-grade atmospheric dispersion. Ideal for all outdoor activities.',
      mask: 'No mask required. Ambient air is safe for all groups.',
      sports: 'Ideal conditions for jogging, sports, and intense cardio.',
      home: 'Natural ventilation recommended; open windows freely.',
      seniors: 'Safe for infants, asthmatic patients, and senior citizens.'
    };
  } else if (aqi <= 100) {
    return {
      category: 'SATISFACTORY',
      color: '#84cc16',
      class: 'status-good',
      headline: 'Air Quality is Satisfactory',
      desc: 'Minor breathing discomfort to sensitive people with lung ailments. Generally acceptable.',
      mask: 'Sensitive individuals may consider masks in congested traffic corridors.',
      sports: 'Outdoor recreation and endurance workouts are fully acceptable.',
      home: 'Standard indoor conditions. Periodic cross-ventilation advised.',
      seniors: 'Patients with existing bronchial sensitivity should take routine medication.'
    };
  } else if (aqi <= 200) {
    return {
      category: 'MODERATE',
      color: '#eab308',
      class: 'status-moderate',
      headline: 'Air Quality is Moderate',
      desc: 'Breathing discomfort to people with lungs, asthma, and heart diseases. Visible haze.',
      mask: 'N95 respirators recommended along high-density traffic arteries.',
      sports: 'Reduce prolonged intense cardio; reschedule to early afternoons.',
      home: 'Keep windows closed during morning/evening commute spikes.',
      seniors: 'Children and seniors with respiratory ailments should avoid heavy outdoor exertion.'
    };
  } else if (aqi <= 300) {
    return {
      category: 'POOR',
      color: '#f97316',
      class: 'status-poor',
      headline: 'Health Warning: Poor Air Quality',
      desc: 'Breathing discomfort to most people on prolonged exposure. Throat irritation and fatigue.',
      mask: 'Wear N95/FFP2 respirators when traveling outdoors.',
      sports: 'Avoid strenuous outdoor cardio. Switch to indoor gym workouts.',
      home: 'Deploy HEPA filtration in bedrooms; seal window drafts.',
      seniors: 'Vulnerable individuals must stay indoors; keep inhalers accessible.'
    };
  } else if (aqi <= 400) {
    return {
      category: 'VERY POOR',
      color: '#ef4444',
      class: 'status-verypoor',
      headline: 'High Alert: Very Poor Air Quality',
      desc: 'Respiratory illness to people on prolonged exposure. Significant cardiovascular stress.',
      mask: 'Strict N95/N99 respirator enforcement for any outdoor transit.',
      sports: 'Completely suspend all outdoor jogging and athletic events.',
      home: 'Continuous HEPA air purifiers at high fan speeds; avoid vacuuming.',
      seniors: 'Strict indoor confinement for heart and lung patients.'
    };
  } else {
    return {
      category: 'SEVERE',
      color: '#a855f7',
      class: 'status-severe',
      headline: 'Emergency Protocol: Severe Air Quality',
      desc: 'Severe effects on healthy people and serious impact on those with existing disease.',
      mask: 'Medical N99 / PAPR respirators mandatory outdoors.',
      sports: 'All outdoor exercise strictly prohibited.',
      home: 'Hermetically close living spaces. Run medical-grade air scrubbers.',
      seniors: 'High vulnerability: Seek immediate telehealth support if chest tightens.'
    };
  }
}

// ==========================================
// 3. SYNTHESIS ENGINE (Multi-Day Telemetry)
// ==========================================
function findCityData(cityName) {
  for (let state in REGIONS_DATA) {
    const found = REGIONS_DATA[state].find(c => c.city === cityName);
    if (found) return { ...found, state };
  }
  return { ...REGIONS_DATA["Delhi NCR"][0], state: "Delhi NCR" };
}

function generateTelemetrySeries(cityName, days) {
  const cityInfo = findCityData(cityName);
  const base = cityInfo.base; // [pm25, pm10, no2, o3, so2, co]

  const records = [];
  const now = new Date();

  for (let i = 0; i < days; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - (days - 1 - i));

    // Realistic atmospheric waves: diurnal cycle + weekly weather fluctuation
    const synopticWave = Math.sin((i / days) * Math.PI * 2.5) * 0.18;
    const microWave = Math.cos(i * 0.85) * 0.12;
    const noise = (Math.random() - 0.5) * 0.08;
    const factor = 1 + synopticWave + microWave + noise;

    const pm25 = Math.max(6, +(base[0] * factor).toFixed(1));
    const pm10 = Math.max(12, +(base[1] * factor).toFixed(1));
    const no2 = Math.max(5, +(base[2] * (1 + synopticWave * 0.6 + noise)).toFixed(1));
    const o3 = Math.max(6, +(base[3] * (1 - synopticWave * 0.4 + noise)).toFixed(1));
    const so2 = Math.max(2, +(base[4] * (1 + noise * 0.5)).toFixed(1));
    const co = Math.max(0.2, +(base[5] * (1 + synopticWave * 0.5 + noise)).toFixed(2));

    const aqiObj = calculateIndianAQI(pm25, pm10, no2, o3, so2, co);

    records.push({
      dateStr: d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }),
      isoDate: d.toISOString().slice(0, 10),
      pm25,
      pm10,
      no2,
      o3,
      so2,
      co,
      aqi: aqiObj.aqi,
      dominant: aqiObj.dominant
    });
  }
  return records;
}

// ==========================================
// 4. CHART.JS VISUAL ENGINE
// ==========================================
function setupChartDefaults() {
  Chart.defaults.color = '#94a3b8';
  Chart.defaults.font.family = 'DM Sans, sans-serif';
  Chart.defaults.font.size = 11;
  Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(15, 24, 44, 0.95)';
  Chart.defaults.plugins.tooltip.borderColor = 'rgba(142, 118, 255, 0.3)';
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.cornerRadius = 10;
  Chart.defaults.plugins.tooltip.titleColor = '#ffffff';
  Chart.defaults.plugins.tooltip.bodyColor = '#cbd5e1';
}

function renderTrendChart(metricKey) {
  const ctx = document.getElementById('trendChart');
  if (!ctx) return;

  const keyMap = {
    'PM2.5': 'pm25',
    'PM10': 'pm10',
    'NO₂': 'no2',
    'O₃': 'o3',
    'SO₂': 'so2',
    'CO': 'co',
    'AQI': 'aqi'
  };
  const activeField = keyMap[metricKey] || 'pm25';
  const labels = currentDataset.map(d => d.dateStr);
  const values = currentDataset.map(d => d[activeField]);
  const standardLimit = CPCB_STANDARDS[metricKey] || 60;

  // Compute peak, avg, min
  const peak = Math.max(...values);
  const min = Math.min(...values);
  const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);
  const unit = metricKey === 'CO' ? 'mg/m³' : (metricKey === 'AQI' ? 'AQI' : 'µg/m³');

  document.getElementById('chartStatPeak').innerHTML = `${peak} <small>${unit}</small>`;
  document.getElementById('chartStatAvg').innerHTML = `${avg} <small>${unit}</small>`;
  document.getElementById('chartStatMin').innerHTML = `${min} <small>${unit}</small>`;

  if (trendChartInstance) trendChartInstance.destroy();

  const primaryColor = POLLUTANT_PALETTE[metricKey] || '#8e76ff';

  // Create subtle gradient area
  const chartCtx = ctx.getContext('2d');
  const gradient = chartCtx.createLinearGradient(0, 0, 0, 260);
  gradient.addColorStop(0, primaryColor + '55');
  gradient.addColorStop(1, primaryColor + '05');

  trendChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: `${metricKey} Observed`,
          data: values,
          borderColor: primaryColor,
          backgroundColor: gradient,
          fill: true,
          tension: 0.38,
          pointRadius: 3.5,
          pointHoverRadius: 6,
          pointBackgroundColor: primaryColor,
          borderWidth: 2.5
        },
        {
          label: 'CPCB Benchmark Standard',
          data: Array(values.length).fill(standardLimit),
          borderColor: '#f43f5e',
          borderDash: [6, 6],
          borderWidth: 1.8,
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#64748b', maxTicksLimit: 10 }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#64748b', maxTicksLimit: 6 },
          border: { display: false }
        }
      }
    }
  });
}

function renderDistributionDonut() {
  const ctx = document.getElementById('mixChart');
  if (!ctx) return;

  const latest = currentDataset[currentDataset.length - 1];
  const items = [
    { label: 'PM2.5', val: latest.pm25, color: POLLUTANT_PALETTE['PM2.5'], unit: 'µg/m³' },
    { label: 'PM10', val: latest.pm10, color: POLLUTANT_PALETTE['PM10'], unit: 'µg/m³' },
    { label: 'NO₂', val: latest.no2, color: POLLUTANT_PALETTE['NO₂'], unit: 'µg/m³' },
    { label: 'O₃', val: latest.o3, color: POLLUTANT_PALETTE['O₃'], unit: 'µg/m³' },
    { label: 'SO₂', val: latest.so2, color: POLLUTANT_PALETTE['SO₂'], unit: 'µg/m³' },
    { label: 'CO', val: latest.co * 10, color: POLLUTANT_PALETTE['CO'], unit: 'x10' }
  ];

  if (mixChartInstance) mixChartInstance.destroy();

  mixChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: items.map(i => i.label),
      datasets: [
        {
          data: items.map(i => i.val),
          backgroundColor: items.map(i => i.color),
          borderWidth: 0,
          hoverOffset: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '74%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ` ${context.label}: ${context.raw} µg/m³`;
            }
          }
        }
      }
    }
  });

  // Populate HTML Breakdown list
  const listEl = document.getElementById('mixListBreakdown');
  if (listEl) {
    const totalMass = items.reduce((s, i) => s + i.val, 0);
    listEl.innerHTML = items.slice(0, 5).map(item => {
      const pct = ((item.val / totalMass) * 100).toFixed(1);
      return `
        <div class="mix-item neo-concave">
          <div class="mix-item-name">
            <span class="mix-color-dot" style="background:${item.color};"></span>
            <span>${item.label}</span>
          </div>
          <div class="mix-item-val">
            <b>${item.val}</b>
            <small>(${pct}%)</small>
          </div>
        </div>
      `;
    }).join('');
  }
}

function renderForecastChart() {
  const ctx = document.getElementById('forecastChart');
  if (!ctx) return;

  const keyMap = { 'PM2.5': 'pm25', 'PM10': 'pm10', 'NO₂': 'no2', 'O₃': 'o3', 'SO₂': 'so2', 'CO': 'co' };
  const targetKey = keyMap[currentChartMetric] || 'pm25';

  const history = currentDataset.slice(-7);
  const labels = history.map(d => d.dateStr).concat(['T+24H Forecast']);
  const observedVals = history.map(d => d[targetKey]);

  // Autoregressive baseline: weighted moving average (3-day exponential)
  const last3 = observedVals.slice(-3);
  const baseline = (last3[0] * 0.2 + last3[1] * 0.3 + last3[2] * 0.5);
  const uncertainty = baseline * 0.085;

  const forecastVal = +baseline.toFixed(1);
  const upperVal = +(baseline + uncertainty).toFixed(1);
  const lowerVal = +(baseline - uncertainty).toFixed(1);

  document.getElementById('forecastValue').innerHTML = `${forecastVal} <small>${currentChartMetric === 'CO' ? 'mg/m³' : 'µg/m³'}</small>`;
  document.getElementById('forecastPollutantLabel').textContent = currentChartMetric;

  if (forecastChartInstance) forecastChartInstance.destroy();

  const observedSeries = observedVals.concat([null]);
  const forecastSeries = Array(6).fill(null).concat([observedVals[observedVals.length - 1], forecastVal]);
  const upperBoundSeries = Array(6).fill(null).concat([observedVals[observedVals.length - 1], upperVal]);
  const lowerBoundSeries = Array(6).fill(null).concat([observedVals[observedVals.length - 1], lowerVal]);

  forecastChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Historical Observed',
          data: observedSeries,
          borderColor: '#8e76ff',
          backgroundColor: 'transparent',
          borderWidth: 2.5,
          tension: 0.35,
          pointRadius: 3
        },
        {
          label: 'T+24H Projection',
          data: forecastSeries,
          borderColor: '#00e5a3',
          borderDash: [5, 4],
          borderWidth: 2.5,
          pointRadius: 5,
          pointBackgroundColor: '#00e5a3',
          spanGaps: true
        },
        {
          label: 'Upper 80% CI',
          data: upperBoundSeries,
          borderColor: '#38bdf8',
          borderDash: [2, 3],
          borderWidth: 1.5,
          pointRadius: 0,
          spanGaps: true
        },
        {
          label: 'Lower 80% CI',
          data: lowerBoundSeries,
          borderColor: '#38bdf8',
          borderDash: [2, 3],
          borderWidth: 1.5,
          pointRadius: 0,
          spanGaps: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#64748b' } },
        y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' }, border: { display: false } }
      }
    }
  });
}

// ==========================================
// 5. GAUGES & DASHBOARD VIEW UPDATE
// ==========================================
function updateDashboardUI() {
  const cityInfo = findCityData(currentSelectedCity);
  const latest = currentDataset[currentDataset.length - 1];
  const aqiInfo = getAqiMeta(latest.aqi);

  // Update Header & Locations
  document.getElementById('currentLocationTitle').textContent = `${cityInfo.city} · ${cityInfo.state}`;
  document.getElementById('dominantPollutantText').textContent = `${latest.dominant} (Dominant Stressor)`;

  // Update Master AQI Score & Gauge Arc
  document.getElementById('masterAqiValue').textContent = latest.aqi;
  document.getElementById('aqiCategoryText').textContent = aqiInfo.category;
  document.getElementById('aqiCategoryText').style.color = aqiInfo.color;

  const aqiBadge = document.getElementById('aqiBadge');
  const badgeDot = aqiBadge.querySelector('.badge-dot');
  if (badgeDot) {
    badgeDot.style.background = aqiInfo.color;
    badgeDot.style.boxShadow = `0 0 10px ${aqiInfo.color}`;
  }

  // Update SVG Semi-Circle Arc
  // Arc total perimeter for R=90 is approx 283
  const totalDash = 283;
  const aqiRatio = Math.min(1, Math.max(0, latest.aqi / 500));
  const dashOffset = totalDash - (totalDash * aqiRatio);
  const fillPath = document.getElementById('gaugeFillPath');
  if (fillPath) {
    fillPath.style.strokeDashoffset = dashOffset;
  }

  // Update CPCB Scale Pointer (0% to 100%)
  const scalePointer = document.getElementById('scalePointer');
  if (scalePointer) {
    const leftPct = Math.min(98, Math.max(2, (latest.aqi / 500) * 100));
    scalePointer.style.left = `${leftPct}%`;
  }

  // Update Health Advisory Banner
  document.getElementById('advisoryHeadline').textContent = aqiInfo.headline;
  document.getElementById('advisoryDesc').textContent = aqiInfo.desc;

  // Update Health Guide Cards
  document.getElementById('healthMaskText').textContent = aqiInfo.mask;
  document.getElementById('healthSportsText').textContent = aqiInfo.sports;
  document.getElementById('healthHomeText').textContent = aqiInfo.home;
  document.getElementById('healthSeniorsText').textContent = aqiInfo.seniors;

  // Update Weather Context
  document.getElementById('weatherTemp').textContent = `${cityInfo.temp} °C`;
  document.getElementById('weatherHumidity').textContent = `${cityInfo.hum} %`;
  document.getElementById('weatherWind').textContent = cityInfo.wind;
  document.getElementById('weatherPressure').textContent = `${cityInfo.press} hPa`;

  // Update Pollutant Cards (PM2.5, PM10, NO2, O3, SO2, CO)
  updatePollutantCard('pm25', latest.pm25, CPCB_STANDARDS['PM2.5'], 'µg/m³');
  updatePollutantCard('pm10', latest.pm10, CPCB_STANDARDS['PM10'], 'µg/m³');
  updatePollutantCard('no2', latest.no2, CPCB_STANDARDS['NO₂'], 'µg/m³');
  updatePollutantCard('o3', latest.o3, CPCB_STANDARDS['O₃'], 'µg/m³');
  updatePollutantCard('so2', latest.so2, CPCB_STANDARDS['SO₂'], 'µg/m³');
  updatePollutantCard('co', latest.co, CPCB_STANDARDS['CO'], 'mg/m³');

  // Update Observation Log Table
  updateLogTable();

  // Re-render Charts
  renderTrendChart(currentChartMetric);
  renderDistributionDonut();
  renderForecastChart();
}

function updatePollutantCard(id, val, limit, unit) {
  const valEl = document.getElementById(`val_${id}`);
  const barEl = document.getElementById(`bar_${id}`);
  const benchEl = document.getElementById(`bench_${id}`);

  if (valEl) valEl.innerHTML = `${val} <small>${unit}</small>`;
  if (barEl) {
    const pct = Math.min(100, Math.max(8, (val / (limit * 2)) * 100));
    barEl.style.width = `${pct}%`;
  }
  if (benchEl) {
    if (val > limit) {
      const ratio = (val / limit).toFixed(1);
      benchEl.innerHTML = `<span class="text-coral">${ratio}x CPCB Limit</span>`;
    } else {
      benchEl.innerHTML = `<span class="text-emerald">Safe (${((val / limit) * 100).toFixed(0)}% of std)</span>`;
    }
  }
}

function updateLogTable() {
  const tbody = document.getElementById('readingsBody');
  if (!tbody) return;

  const reversed = [...currentDataset].reverse().slice(0, 8);
  tbody.innerHTML = reversed.map(r => {
    const meta = getAqiMeta(r.aqi);
    return `
      <tr>
        <td><b>${r.dateStr} 12:00 IST</b></td>
        <td>${currentSelectedCity}</td>
        <td><span class="status-chip ${meta.class}">${r.aqi} ${meta.category}</span></td>
        <td>${r.pm25}</td>
        <td>${r.pm10}</td>
        <td>${r.no2}</td>
        <td>${r.o3}</td>
        <td>${r.so2}</td>
        <td>${r.co}</td>
        <td><span class="text-emerald">● CAAQMS Calibrated</span></td>
      </tr>
    `;
  }).join('');
}

// ==========================================
// 6. NATIONAL BENCHMARK MATRIX (State Matrix)
// ==========================================
function renderNationalMatrix() {
  const tbody = document.getElementById('nationalTableBody');
  if (!tbody) return;

  const nationalRankings = [];

  for (let state in REGIONS_DATA) {
    for (let c of REGIONS_DATA[state]) {
      const aqiObj = calculateIndianAQI(c.base[0], c.base[1], c.base[2], c.base[3], c.base[4], c.base[5]);
      nationalRankings.push({
        state,
        city: c.city,
        aqi: aqiObj.aqi,
        pm25: c.base[0],
        pm10: c.base[1],
        dominant: aqiObj.dominant
      });
    }
  }

  // Sort from Cleanest to Most Polluted
  nationalRankings.sort((a, b) => a.aqi - b.aqi);

  // Set tags for Cleanest & Worst
  const cleanest = nationalRankings[0];
  const worst = nationalRankings[nationalRankings.length - 1];
  document.getElementById('cleanestCityTag').textContent = `${cleanest.city} (${cleanest.aqi})`;
  document.getElementById('worstCityTag').textContent = `${worst.city} (${worst.aqi})`;

  tbody.innerHTML = nationalRankings.map((row, idx) => {
    const rank = idx + 1;
    const meta = getAqiMeta(row.aqi);
    const rankClass = rank <= 5 ? 'top' : (rank >= nationalRankings.length - 4 ? 'low' : 'mid');
    const isSelected = row.city === currentSelectedCity;
    const delta = (Math.sin(rank * 1.5) * 4.5).toFixed(1);
    const deltaSign = delta >= 0 ? `+${delta}%` : `${delta}%`;
    const deltaColor = delta < 0 ? 'text-emerald' : 'text-coral';

    return `
      <tr class="${isSelected ? 'selected-row' : ''}" onclick="selectCityFromTable('${row.state}', '${row.city}')">
        <td><span class="rank-badge ${rankClass}">${rank}</span></td>
        <td><b>${row.state}</b></td>
        <td>${row.city}</td>
        <td><b>${row.aqi}</b></td>
        <td><span class="status-chip ${meta.class}">${meta.category}</span></td>
        <td>${row.pm25} µg/m³</td>
        <td>${row.pm10} µg/m³</td>
        <td><span class="${deltaColor}">${deltaSign}</span></td>
        <td><button class="inspect-btn">Inspect ⇲</button></td>
      </tr>
    `;
  }).join('');
}

window.selectCityFromTable = function(state, city) {
  currentSelectedState = state;
  currentSelectedCity = city;

  document.getElementById('stateSelect').value = state;
  populateCityDropdown(state, city);

  currentDataset = generateTelemetrySeries(currentSelectedCity, currentTemporalDays);
  updateDashboardUI();
  renderNationalMatrix();

  // Smooth scroll back to overview
  const heroEl = document.getElementById('dashboard');
  if (heroEl) heroEl.scrollIntoView({ behavior: 'smooth' });
};

// ==========================================
// 7. CONTROLS, SELECTORS & SIMULATION
// ==========================================
function populateCityDropdown(selectedState, preselectedCity) {
  const citySelect = document.getElementById('citySelect');
  citySelect.innerHTML = '';

  let citiesToDisplay = [];
  if (selectedState === 'ALL') {
    for (let st in REGIONS_DATA) {
      citiesToDisplay.push(...REGIONS_DATA[st]);
    }
  } else {
    citiesToDisplay = REGIONS_DATA[selectedState] || REGIONS_DATA['Delhi NCR'];
  }

  citiesToDisplay.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.city;
    opt.textContent = `${c.city}`;
    if (preselectedCity && c.city === preselectedCity) {
      opt.selected = true;
    }
    citySelect.appendChild(opt);
  });

  if (!preselectedCity && citiesToDisplay.length > 0) {
    currentSelectedCity = citiesToDisplay[0].city;
  }
}

function initEventHandlers() {
  const stateSelect = document.getElementById('stateSelect');
  const citySelect = document.getElementById('citySelect');
  const simToggle = document.getElementById('simToggle');
  const exportBtn = document.getElementById('exportBtn');
  const refreshBtn = document.getElementById('refreshBtn');
  const resetBtn = document.getElementById('resetBtn');

  // State Change
  stateSelect.addEventListener('change', (e) => {
    currentSelectedState = e.target.value;
    populateCityDropdown(currentSelectedState);
    currentSelectedCity = citySelect.value;
    currentDataset = generateTelemetrySeries(currentSelectedCity, currentTemporalDays);
    updateDashboardUI();
    renderNationalMatrix();
  });

  // City Change
  citySelect.addEventListener('change', (e) => {
    currentSelectedCity = e.target.value;
    currentDataset = generateTelemetrySeries(currentSelectedCity, currentTemporalDays);
    updateDashboardUI();
    renderNationalMatrix();
  });

  // Temporal Window Pills
  document.querySelectorAll('.range-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.range-pill').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentTemporalDays = +e.target.getAttribute('data-days');
      currentDataset = generateTelemetrySeries(currentSelectedCity, currentTemporalDays);
      updateDashboardUI();
    });
  });

  // Metric Selector Pills in Chart
  document.querySelectorAll('.m-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.m-pill').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentChartMetric = e.target.getAttribute('data-metric');
      renderTrendChart(currentChartMetric);
      renderForecastChart();
    });
  });

  // Clickable Pollutant Cards
  document.querySelectorAll('.p-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.p-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const p = card.getAttribute('data-pollutant');
      currentChartMetric = p;

      // Update chart pills active state
      document.querySelectorAll('.m-pill').forEach(b => {
        if (b.getAttribute('data-metric') === p) b.classList.add('active');
        else b.classList.remove('active');
      });

      renderTrendChart(currentChartMetric);
      renderForecastChart();
    });
  });

  // Live Stream Simulation Toggle
  simToggle.addEventListener('click', () => {
    isLiveStreaming = !isLiveStreaming;
    simToggle.classList.toggle('active', isLiveStreaming);
    if (isLiveStreaming) startLiveSimulation();
    else clearInterval(liveStreamInterval);
  });

  // Reset Button
  resetBtn.addEventListener('click', () => {
    currentSelectedState = 'Delhi NCR';
    currentSelectedCity = 'Delhi (Central)';
    currentTemporalDays = 14;
    currentChartMetric = 'PM2.5';
    stateSelect.value = 'Delhi NCR';
    populateCityDropdown('Delhi NCR', 'Delhi (Central)');
    document.querySelectorAll('.range-pill').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-days') === '14');
    });
    currentDataset = generateTelemetrySeries(currentSelectedCity, currentTemporalDays);
    updateDashboardUI();
    renderNationalMatrix();
  });

  // Refresh Button
  refreshBtn.addEventListener('click', () => {
    refreshBtn.style.transform = 'rotate(180deg)';
    setTimeout(() => { refreshBtn.style.transform = 'rotate(0deg)'; }, 400);
    currentDataset = generateTelemetrySeries(currentSelectedCity, currentTemporalDays);
    updateDashboardUI();
  });

  // Export CSV Button
  exportBtn.addEventListener('click', exportCSV);
}

// Live Micro-Simulation Tick
function startLiveSimulation() {
  if (liveStreamInterval) clearInterval(liveStreamInterval);
  liveStreamInterval = setInterval(() => {
    if (!isLiveStreaming || currentDataset.length === 0) return;

    const latest = currentDataset[currentDataset.length - 1];
    // Gentle brownian fluctuation
    const nudge = (Math.random() - 0.5) * 1.8;
    latest.pm25 = Math.max(5, +(latest.pm25 + nudge).toFixed(1));
    latest.pm10 = Math.max(10, +(latest.pm10 + nudge * 1.5).toFixed(1));
    latest.no2 = Math.max(4, +(latest.no2 + nudge * 0.4).toFixed(1));
    latest.o3 = Math.max(5, +(latest.o3 - nudge * 0.3).toFixed(1));

    const aqiObj = calculateIndianAQI(latest.pm25, latest.pm10, latest.no2, latest.o3, latest.so2, latest.co);
    latest.aqi = aqiObj.aqi;
    latest.dominant = aqiObj.dominant;

    updateDashboardUI();
  }, 3500);
}

// Export CSV Function
window.exportCSV = function() {
  const headers = ['Timestamp_IST', 'Location', 'AQI', 'Dominant_Pollutant', 'PM25_ug_m3', 'PM10_ug_m3', 'NO2_ug_m3', 'O3_ug_m3', 'SO2_ug_m3', 'CO_mg_m3'];
  const rows = currentDataset.map(r => [
    `${r.isoDate} 12:00:00`,
    `"${currentSelectedCity}"`,
    r.aqi,
    r.dominant,
    r.pm25,
    r.pm10,
    r.no2,
    r.o3,
    r.so2,
    r.co
  ].join(','));

  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `AirSight_Telemetry_${currentSelectedCity.replace(/\s+/g, '_')}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

// ==========================================
// 8. INITIALIZATION RUNNER
// ==========================================
function initApp() {
  setupChartDefaults();
  populateCityDropdown(currentSelectedState, currentSelectedCity);
  currentDataset = generateTelemetrySeries(currentSelectedCity, currentTemporalDays);
  initEventHandlers();
  updateDashboardUI();
  renderNationalMatrix();
  startLiveSimulation();
}

// Bootstrapping
window.addEventListener('DOMContentLoaded', initApp);
