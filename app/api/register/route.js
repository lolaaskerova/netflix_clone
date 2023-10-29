import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    console.log(req.body);
    if (!name || !email || !password) {
      return new NextResponse("Missing username, email or password", {
        status: 400,
      });
    }

    const existedUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existedUser) {
      return new NextResponse("User already exists", {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}

// export default async function handler(req, res) {
//   if (req.method == "POST") {
//     return res.status(405).end();
//   }

//   try {
//     const { name, email, password } = req.body;
//     const existingUser = prismadb.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (existingUser) {
//       return res.status(422).json({ error: "Email already exist" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 12);

//     const user = await prismadb.user.create({
//       data: {
//         name,
//         email,
//         hashedPassword,
//       },
//     });

//     return res.status(200).json(user);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).end();
//   }
// }
