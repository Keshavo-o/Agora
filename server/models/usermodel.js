const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    //identity
    username: {
        type: String,
        // required: true,
        // uniqu: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },

    displayName: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    phone: {
        type: String,
        default: null
    },

    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true,
        default: 'Password@123'
    },


    ///profile
    avatar: {
        type: String,
        default: null
    },

    bio: {
        type: String,
        maxlength: 300,
        default: "Hello I am new to Agora"
    },

    location: {
        city: String,
        state: String,
        country: String
    },

    website: {
        type: String,
        default: null
    },


    //account stats
    role: {
        type: String,
        enum: ["user", "moderator", "admin"],
        default: "user"
    },

    status: {
        type: String,
        enum: [
            "active",
            "inactive",
            "suspended",
            "banned"
        ],
        default: "active"
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    emailVerified: {
        type: Boolean,
        default: false
    },

    phoneVerified: {
        type: Boolean,
        default: false
    },


    //security
    failedLoginAttempts: {
        type: Number,
        default: 0
    },

    accountLockedUntil: {
        type: Date,
        default: null
    },

    lastLogin: {
        type: Date,
        default: null
    },

    passwordChangedAt: {
        type: Date,
        default: null
    },


    //otp
    otp: {
        type: String,
        default: null
    },

    otpExpiresAt: {
        type: Date,
        default: null
    },


    //shopping

    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],

    recentlyViewed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],


    //selling?

    seller: {
        isSeller: {
            type: Boolean,
            default: false
        },

        sellerSince: {
            type: Date,
            default: null
        },

        rating: {
            type: Number,
            default: 0
        },

        totalSales: {
            type: Number,
            default: 0
        }
    },


    //    COMMUNITY

    followersCount: {
        type: Number,
        default: 0
    },

    followingCount: {
        type: Number,
        default: 0
    },

    postsCount: {
        type: Number,
        default: 0
    },


    lastActiveAt: {
        type: Date,
        default: Date.now
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }

});

const model = mongoose.model('users', userSchema)

module.exports = model