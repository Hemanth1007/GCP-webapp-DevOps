# GCP Webapp DevOps

This repository contains materials and configuration files for setting up and deploying a web application on Google Cloud Platform using DevOps best practices.

## Git Command Explorer

A simple static site is included to help you learn Git commands. Open `index.html` in a web browser to explore commands and see how they behave in different scenarios, from basic usage to more advanced operations.

## GitHub Actions

A workflow runs whenever changes are pushed to the `main` branch. It starts a simple HTTP server and ensures the Git Command Explorer can be loaded from `http://localhost:8000/index.html`.
