const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create a Share
router.post("/", async (req, res) => {
    const { userId, postId } = req.body;
    if (!Number.isInteger(userId) || !Number.isInteger(postId)) {
        return res.status(400).json({ error: "userId and postId must be integers" });
    }

    try {
        const share = await prisma.share.create({
            data: {
                userId,
                postId,
            },
        });
        res.status(201).json(share);
    } catch (error) {
        if (error.code === "P2002") {
            return res.status(400).json({ error: "Share already exists for this user and post" });
        }
        if (error.code === "P2003") {
            return res.status(400).json({ error: "Invalid userId or postId" });
        }
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete a Share
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: "id must be an integer" });
    }

    try {
        await prisma.share.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(204).send();
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ error: "Share not found" });
        }
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get Shares by a User
router.get("/:userId/shares", async (req, res) => {
    const { userId } = req.params;
    const { skip, take, include } = req.query; // Added include for related data

    if (!Number.isInteger(parseInt(userId))) {
        return res.status(400).json({ error: "userId must be an integer" });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const includeOptions = {};
        if (include) {
            const includes = include.split(",");
            if (includes.includes("user")) includeOptions.user = true;
            if (includes.includes("post")) includeOptions.post = true;
        }

        const shares = await prisma.share.findMany({
            where: {
                userId: parseInt(userId),
            },
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            orderBy: {
                createdAt: "desc",
            },
            include: includeOptions,
        });

        res.status(200).json(shares);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get All Shares
router.get("/", async (req, res) => {
    const { userId, postId, skip, take, include } = req.query;

    try {
        const where = {};
        if (userId) {
            if (!Number.isInteger(parseInt(userId))) {
                return res.status(400).json({ error: "userId must be an integer" });
            }
            where.userId = parseInt(userId);
        }
        if (postId) {
            if (!Number.isInteger(parseInt(postId))) {
                return res.status(400).json({ error: "postId must be an integer" });
            }
            where.postId = parseInt(postId);
        }

        const includeOptions = {};
        if (include) {
            const includes = include.split(",");
            if (includes.includes("user")) includeOptions.user = true;
            if (includes.includes("post")) includeOptions.post = true;
        }

        const shares = await prisma.share.findMany({
            where,
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            orderBy: {
                createdAt: "desc",
            },
            include: includeOptions,
        });

        res.status(200).json(shares);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get a Share by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { include } = req.query;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: "id must be an integer" });
    }

    try {
        const includeOptions = {};
        if (include) {
            const includes = include.split(",");
            if (includes.includes("user")) includeOptions.user = true;
            if (includes.includes("post")) includeOptions.post = true;
        }

        const share = await prisma.share.findUnique({
            where: { id: parseInt(id) },
            include: includeOptions,
        });

        if (!share) {
            return res.status(404).json({ error: "Share not found" });
        }

        res.status(200).json(share);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get Shares for a Post
router.get("/post/:postId", async (req, res) => {
    const { postId } = req.params;
    const { skip, take, include } = req.query;

    if (!Number.isInteger(parseInt(postId))) {
        return res.status(400).json({ error: "postId must be an integer" });
    }

    try {
        const post = await prisma.post.findUnique({
            where: { id: parseInt(postId) },
        });
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        const includeOptions = {};
        if (include) {
            const includes = include.split(",");
            if (includes.includes("user")) includeOptions.user = true;
            if (includes.includes("post")) includeOptions.post = true;
        }

        const shares = await prisma.share.findMany({
            where: {
                postId: parseInt(postId),
            },
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            orderBy: {
                createdAt: "desc",
            },
            include: includeOptions,
        });

        res.status(200).json(shares);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;