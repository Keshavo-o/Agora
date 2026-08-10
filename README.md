# Agora 🏛️ 

> **Multi-VendorE-Commerce Marketplace + Community**

**STATUS: Under Development**

Agora is a production-oriented multi-vendor e-commerce platform inspired by the ancient Greek marketplace. It connects **buyers, sellers, and administrators** through a modern, scalable full-stack architecture.

## Roles

* **Buyer** - Browse products, manage cart & wishlist, checkout, place orders, and track purchases.
* **Seller** - Manage stores, products, inventory, and seller orders.
* **Admin** - Manage users, sellers, products, categories, orders, and the overall platform.

## Features

*  Authentication & role-based authorization
*  Product browsing, search, filtering & pagination
*  Multi-seller shopping cart
*  Wishlist
*  Order & inventory management
*  Payment-ready checkout architecture
*  Seller store management
*  Coupon & discount system
*  Product reviews & ratings
*  Redis caching
*  Redis-based rate limiting
*  Idempotent order processing
*  API & request validation
*  Security middleware, CORS & HTTP-only cookies
*  Seller & admin analytics
*  Structured logging & centralized error handling
*  Health-check endpoints
*  Nginx reverse proxy


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

> **Agora - Everything. One Place.**
