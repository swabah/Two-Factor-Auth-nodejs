import { Router } from 'express'
import passport from 'passport'
import { login, register, authStatus, logout, setup2fa, verify2fa, reset2fa } from '../controllers/authCOntroller.js'

const router = Router()

// Registration Route
router.post("/register", register)
// Login Route
router.post("/login", passport.authenticate("local"), login)
// Auth Status Route
router.get("/status", authStatus)
// Logout Route
router.post("/logout", logout)

// 2FA setup Route
router.post("/2fa/setup", (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.status(401).json({ message: "Unauthorized" })
}, setup2fa)
// verify Route
router.post("/2fa/verify", (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.status(401).json({ message: "Unauthorized" })
}, verify2fa)
// reset Route
router.post("/2fa/reset", (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.status(401).json({ message: "Unauthorized" })
}, reset2fa)

export default router
