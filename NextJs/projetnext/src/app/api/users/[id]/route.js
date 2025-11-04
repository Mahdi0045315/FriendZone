// src/app/api/users/[id]/route.js
/*import prisma from '@/lib/prisma';  // Résoudra vers ./prisma.js

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) }, // important : convertir en nombre
    });

    if (!user) {
      return new Response(JSON.stringify({ error: 'Utilisateur non trouvé' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error('Erreur GET user :', error);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
    });
  }
}*/
