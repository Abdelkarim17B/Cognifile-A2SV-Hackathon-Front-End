import { verifySession } from '@/src/lib/session';
import api from '@/src/utils/axios';

// Route for fetching user profile data after a google auth
export async function POST(request: Request) {
  try {
    const { token } = await verifySession();
    const formData = await request.formData();
    const folderName = formData.get('folderName') as string;
    const folderId = formData.get('folderId') as string;
    formData.delete('folderId');

    if (!folderName || !folderId) {
      throw new Error('folderName or folderId missing');
    }

    const response = await api.post(`/storage/folder/${folderId}/folder`, formData, {
      headers: {
        Authorization: `Bearer ${token + process.env.MAGIC_SPLITTER + process.env.SECRET_CODE}`,
      },
    });

    if (!response.data.success) {
      return new Response(
        JSON.stringify({
          message: 'An issue occurred while fetching user profile data',
        }),
        {
          status: 400,
          headers: {},
        },
      );
    }
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {},
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'An issue occurred while fetching user profile data',
      }),
      {
        status: 400,
        headers: {},
      },
    );
  }
}
