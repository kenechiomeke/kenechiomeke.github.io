---
layout: project
title: SOSCHI — UN Climate-Health Platform & climatehealth R Package
image: /assets/images/climate-platform.jpg
technologies:
  - Python
  - Flask
  - R
  - CRAN
  - Docker
  - Kubernetes
  - Git/GitHub
---

## Overview

**SOSCHI** (Standards for Official Statistics on Climate-Health Interactions) is a £5m Wellcome Trust-funded programme hosted on the **UN Global Platform**. As Technical Lead, I lead the platform engineering and the open-source statistical tooling that operationalises the SOSCHI methods for national statistical offices worldwide.

In **March 2026**, the SOSCHI methods were **endorsed by the United Nations Statistical Commission** at its 57th session in New York for inclusion in the Global Set of Environment and Climate Change Statistics.

## My Role

- **Technical Lead** — own the platform engineering across services, APIs, deployment, monitoring, and maintenance.
- **Lead maintainer, platform developer, and corresponding author** of the [`climatehealth`](https://climate-health.officialstatistics.org) R package, **published on CRAN**.
- Manage the project's GitHub workspace, RAP standards, code review process, pre-commit hooks, unit testing, and pull-request templates.

## What the climatehealth Package Does

`climatehealth` operationalises **six climate-health indicators** endorsed by the UN Statistical Commission:

1. Temperature-related mortality
2. Wildfire smoke exposure mortality
3. Air pollution health effects
4. Suicides related to extreme heat
5. Malaria
6. Diarrhoeal disease outcomes

Implemented methods include:
- Distributed lag non-linear models (DLNM)
- Quasi-Poisson time-series regression
- Case-crossover analysis
- Bayesian spatio-temporal models using INLA
- Multivariate meta-analysis for sub-national estimates

## Platform Engineering

- Backend: Flask web application with API endpoints exposing the `climatehealth` workflows.
- Service layer: data ingestion (Copernicus ERA5, OpenAQ), search, indicator pipelines.
- Deployment: Dockerised services, Kubernetes orchestration, monitoring, and migration tooling.
- A parallel **Rust reimplementation** (`climatehealth-rs`) of core algorithms for performance benchmarking.
- A **JavaScript data explorer** (`data_explorer_js`) for interactive visualisation.

## International Collaboration

- Bi-weekly engineering meetings with partners in **Ghana** and **Rwanda**.
- Monthly **Expert Advisory Group** and **Topic Expert Group** meetings with international researchers.
- Weekly catchups with the **UN technical team** to review code/package updates prior to deployment on the UN Global Platform.

## Links

- Platform: [https://climate-health.officialstatistics.org](https://climate-health.officialstatistics.org)
- R package: [`climatehealth` on CRAN](https://cran.r-project.org/package=climatehealth)
