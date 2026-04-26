---
layout: project
title: Internet of Underwater Things — Cognitive Networking
image: /assets/images/iout.jpg
technologies:
  - Python
  - PyTorch
  - Reinforcement Learning
  - Federated Learning
  - YOLOv8
---

## Overview

My doctoral and ongoing research at the **James Watt School of Engineering, University of Glasgow** focuses on the **Internet of Underwater Things (IoUT)** — one of the most demanding application areas in wireless engineering due to harsh acoustic channels, low bandwidth, high latency, and severe energy constraints.

## Key Engineering Contributions

### DEKCS — Dynamic Clustering Protocol
A clustering and routing protocol for underwater wireless sensor networks that selects cluster heads dynamically based on residual energy and distance. Extends network lifetime by **more than 70%** compared to standard protocols.

- Published in *IEEE Sensors Journal* (2021); cited **100+ times**.
- One of the most downloaded papers in its category.
- Led to an **invited presentation at the IEEE Sensors Conference, Dallas**.

### RL-SWIPT — Sustainable Underwater Charging
A reinforcement-learning approach for **simultaneous wireless information and power transfer (SWIPT)** using AUVs. Models the joint throughput / harvested-power problem as an MDP — achieves up to **207% improvement in energy efficiency** vs random-trajectory baselines.

- Published in *IEEE Internet of Things Journal* (2024).
- First RL-based approach for this application.

### Q-Learning Route Selection
Models routing as a reinforcement-learning problem prioritising energy efficiency and packet delivery — yielding orders-of-magnitude energy savings vs direct transmission.

- Published in IEEE WCNC.

---

## Current Manuscripts (Under Review)

### Hierarchical Federated Anomaly Detection (IEEE IoT Journal)
A three-tier federated learning framework for IoUT anomaly detection. Feasibility-aware sensor-to-fog association, compressed model updates, and selective cooperative aggregation.
- **31–33% energy reduction** vs always-on inter-fog exchange.
- **71–95% total energy reduction** with compressed uploads.

### STAN — Semantic Telemetry & Anchor Navigation (IEEE JOE)
Transforms AUVs from passive recorders into intelligent edge nodes:
- FathomNet-trained YOLOv8 for semantic detection.
- 64-byte semantic tokens replace raw images (**99.9%+ bandwidth savings**).
- Persistent underwater structures act as **visual anchors** for drift correction.

### ML for IoUT — Survey & Tutorial (IEEE COMST)
A comprehensive tutorial-survey synthesising ~300 papers (2012–2025) on machine learning across the IoUT protocol stack — from physical layer through application layer — with a technology roadmap to 2035+.

---

## Why It Matters

The engineering principles developed here — **resilient sensing, energy-aware protocol design, and federated edge intelligence in constrained environments** — generalise directly to other application domains, including smart housing, environmental monitoring, and critical infrastructure resilience.
