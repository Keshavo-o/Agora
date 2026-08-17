# Agora 🏛️ 

> **Multi-VendorE-Commerce Marketplace + Community**

**STATUS: Under Development**
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/e95b40f0-f92a-4074-a5b4-4ed0aff420af" />


Agora is a production-oriented multi-vendor e-commerce platform inspired by the ancient Greek marketplace. It connects **buyers, sellers, and administrators** through a modern, scalable full-stack architecture.

## Roles

* **Buyer** - Browse products, manage cart & wishlist, checkout, place orders, and track purchases.
* **Seller** - Manage stores, products, inventory, and seller orders.
* **Admin** - Manage users, sellers, products, categories, orders, and the overall platform.

## Features

* **Multi-server architecture** with dedicated User and Admin backend servers
* **Nginx**-based request routing and reverse proxy
* **Redis** caching and cache invalidation strategies
* Redis-backed distributed** rate limiting**
* Stateless **authentication** and role-based access control
* Secure HTTP-only cookie authentication
* Defense-in-depth API **security** and **request** **validation**
* Idempotent APIs for safe request retries
* **Request tracing** with unique request IDs
* **Health-check** and service-readiness endpoints
* **Database indexing** and **optimized** **query** patterns
* **Pagination** and **aggregation-based data processing**
* **Dockerized** services with reproducible environments (LATER)
* CI/CD-ready deployment architecture
* Graceful shutdown and **failure handling**
* **Production-oriented API and infrastructure design**



## Architecture

                        CLIENT
                           │
                           ▼
                     React Frontend
                           │
                           ▼
                         NGINX
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
        USER SERVER 1             ADMIN SERVER 2
              │                         │
       ┌──────┴──────┐                  │
       ▼             ▼                  ▼
     BUYER         SELLER             ADMIN
       │             │                  │
       └─────────────┼──────────────────┘
                     │
              Shared Infrastructure
               ┌─────┴─────┐
               ▼           ▼
             Redis       MongoDB

##  Development

Agora is currently under active development. Features, architecture, and infrastructure will continue to evolve as the project progresses toward a production-ready release.

## Proposed system architecture
<!-- <img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/e95f6614-75f9-4424-b7b0-c9967402a394" /> -->
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/f3500be6-4f13-4d3e-8d4c-e3c94decc705" />


### Key Design Principles

1.  User and Admin traffic are separated.
2.  NGINX is the single entry point for backend traffic.
3.  User Server handles both Buyer and Seller workflows.
4.  Admin Server handles platform-level operations.
5.  Redis is used for caching, rate limiting, temporary data,
    distributed locks, and recommendation caching.
6.  MongoDB is the persistent source of truth.
7.  Recommendation processing is isolated from the core commerce request
    path.
8.  Recommendation failure must not break shopping.
9.  APIs are designed to be stateless and horizontally scalable.
10. Critical operations such as order creation are idempotent.
11. Health checks distinguish liveness from readiness.
12. Docker and CI/CD provide reproducible deployment.



> **Agora - Everything. One Place.**
