import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      res.setHeader("Set-Cookie", `token=${data.access_token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`);

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).end(); 
  }
}
