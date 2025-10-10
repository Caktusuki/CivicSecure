export async function uploadToCloudinary(file) {
  const CLOUD_NAME = 'dquhnzvje'; // your Cloudinary cloud name
  const UPLOAD_PRESET = 'complaints_unsigned'; // your unsigned preset

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
    { method: 'POST', body: formData }
  );
  if (!res.ok) throw new Error('Cloudinary upload failed');
  return await res.json(); // returns {secure_url, public_id, resource_type, ...}
}
