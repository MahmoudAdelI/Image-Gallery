export const share = (imageUrl: string, platform: string) => {
    console.log(imageUrl);
    let platformUrl: string = '';
    const message = 'Check out this amazing image!';
    switch (platform) {
      case 'FACEBOOK' :
        platformUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`;
        break;
      
      case 'TWITTER':
        platformUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(imageUrl)}`;
        break;
  
      case 'WHATSAPP':
        platformUrl = `https://wa.me/?text=${encodeURIComponent(message)}%20${encodeURIComponent(imageUrl)}`;
        break;
      
    }
     
        window.open(platformUrl, '_blank');
  }