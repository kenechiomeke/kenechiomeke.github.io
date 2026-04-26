---
layout: project
title: Albyn Housing — Smart-Home Engineering for Social Housing
image: /assets/images/albyn-housing.jpg
technologies:
  - Python
  - PyTorch
  - ESP32
  - LoRaWAN
  - MQTT
  - Time-Series Analysis
---

## Overview

In partnership with **Albyn Housing** (a major social housing provider in the Scottish Highlands) and the **University of Glasgow**, I led the engineering of two IoT systems studies on a real social-housing testbed. Both systems target affordable, privacy-preserving technologies for healthier living conditions and safer ageing in place — the kind of engineering the UK needs to support resilient, healthy housing at scale.

---

## System 1: Multi-Sensor Mould-Risk Forecasting

A real-time IoT system that **forecasts mould risk 6–48 hours ahead** in social housing, enabling tenants and housing providers to take preventative action (ventilation, heating adjustment, dehumidification) before conditions worsen.

**Engineering results**
- 24-hour AUC-ROC: **0.851 to 0.957** across two real homes.
- Cross-home transfer AUC: up to **0.968**.
- Multi-sensor fusion: temperature, humidity, CO₂, ventilation proxies, heating signals.

**Manuscript**: "Multi-Sensor IoT Fusion for Mould Risk Forecasting in Social Housing" — under review at *IEEE Internet of Things Journal*.

---

## System 2: Non-Intrusive Welfare Monitoring for Lone Elderly Residents

A privacy-preserving IoT system for monitoring the welfare of lone elderly residents — without cameras, microphones, or wearables.

**Engineering results**
- F1 scores: **0.848 and 0.814** across two homes.
- Detection rates: **87% to 100%** across clinically motivated scenarios.
- Cross-home F1 transfer: up to **0.841**.
- Sensing cost per flat: **~£200–300**.
- Rapid deployment: usable from just 7 days of baseline data.

**Sensing approach**
- Per-appliance power monitoring.
- Environmental sensing (temperature, humidity, light).
- Radiator valve state inference.
- Circuit-level energy signals.

**Manuscript**: "Multi-Signal IoT Anomaly Detection for Non-Intrusive Welfare Monitoring of Lone Elderly Residents" — under review at *IEEE Journal of Biomedical and Health Informatics*.

---

## Why This Matters

These systems demonstrate the engineering profile I want to lead in the UK:
- **Affordable** — sub-£300 per flat.
- **Privacy-preserving** — no cameras, microphones, or wearables.
- **Practically deployable** — works from a week of baseline data.
- **Socially meaningful** — improves housing quality, supports independent ageing, reduces pressure on public services.
