export const downloadImage = async(e:React.MouseEvent, imageUrl:string) => {
    e.preventDefault(); // Prevent default anchor behavior
    try {
      const response = await fetch(imageUrl, { mode: 'cors' });
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'image.jpg'; // Specify the default filename
      document.body.appendChild(a);
      a.click(); // Trigger the download
      document.body.removeChild(a);
      URL.revokeObjectURL(url); // Clean up the object URL
    } catch (error) {
      console.error('Failed to download the image:', error);
    }
}