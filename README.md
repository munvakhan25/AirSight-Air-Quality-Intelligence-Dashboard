# AirSight | Air Quality Intelligence Dashboard

A glassmorphism-style frontend MVP for exploring air-quality observations and a transparent baseline forecast.

## Run locally
1. Download or clone this folder.
2. Open `index.html` in a modern browser.
3. Internet access is required for Google Fonts and Chart.js CDN.

No build step is required.

## Features
- City, date-window, and pollutant filters
- Daily time-series chart and pollutant mix chart
- Summary metrics and recent observation table
- One-day moving-average baseline forecast
- CSV export of the currently selected sample observations
- Visible data-source and model-limitations notes

## Important data note
**The current version uses generated sample data.** It does not fetch live observations, connect to PostgreSQL, or train a Scikit-learn model. The charts are intended to demonstrate the frontend and interaction design only. Do not present the sample values as measured air quality.

## Suggested next engineering phase
1. Replace `makeData()` in `script.js` with a request to a Python ingestion API.
2. In Python, collect a public dataset (for example, CPCB/OpenAQ where access and licensing permit), normalize timestamps, units, station identifiers, and missing values with Pandas.
3. Persist cleaned records in PostgreSQL with a unique key such as `(station_id, observed_at, pollutant)`.
4. Expose filtered observations through a FastAPI endpoint.
5. Train and evaluate forecasting baselines in Scikit-learn using chronological train/test splits. Compare persistence and moving-average baselines before trying more complex models.
6. Display source, retrieval time, station coverage, missingness, forecast horizon, and error metrics such as MAE/RMSE.

## Responsible-use statement
This project supports environmental data exploration and experimental forecasting. It does **not** estimate personal exposure, diagnose conditions, or predict health risk. Forecasts are uncertain and depend on data quality, station coverage, and changing environmental conditions.

## Stack in this frontend MVP
HTML · CSS · JavaScript · Chart.js

Planned full stack: Python · Pandas · PostgreSQL · Scikit-learn · Streamlit or FastAPI + this frontend.
