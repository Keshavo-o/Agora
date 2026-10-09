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


> **Agora - Everything. One Place.**
