function search() {
    var input = document.querySelector('.search-input').value;
    if (input.includes('Google')) {
        window.location.href = 'https://www.google.com';
    } else if (input.includes('Youtube')) {
        window.location.href = 'https://www.youtube.com';
    } else if (input.includes('Andylyn')) {
        window.location.href = 'https://www.facebook.com/Jaeeee.yuunn';
    } else if (input.includes('Pauline')) {
        window.location.href = 'https://www.facebook.com/paulinerain.lucre.5';
    } else if (input.includes('Lucre')) {
        window.location.href = 'https://www.facebook.com/paulinerain.lucre.5';
    } else if (input.includes('andylyn')) {
        window.location.href = 'https://adornadowilliam2.github.io/Andylyn/';
    } else if (input.includes('XOX')) {
        window.location.href = 'https://adornadowilliam2.github.io/Tic-Tac-Toe/';
    } else if (input.includes('Onza')) {
        window.location.href = 'https://www.facebook.com/johnmichael.onza';
    } else if (input.includes('John Kirt')) {
        window.location.href = 'https://www.facebook.com/johnmichael.onza';
    } else if (input.includes('Jay')) {
        window.location.href = 'https://www.facebook.com/profile.php?id=100094166333693';
    } else if (input.includes('Edge')) {
        window.location.href = 'https://edge.mfi.org.ph/edgev4/my/';
    } else if (input.includes('Lance')) {
        window.location.href = 'https://www.facebook.com/lanceemanuele.dumago';
    } else if (input.includes('Jannine')) {
        window.location.href = 'https://www.facebook.com/jenin.olarte';
    } else if (input.includes('Maryjoy')) {
        window.location.href = 'https://www.facebook.com/maryjoy.bernabe.562';
    } else if (input.includes('Karla')) {
        window.location.href = 'https://www.facebook.com/karlamae.mojedo.9';
    } else if (input.includes('Althea')) {
        window.location.href = 'https://www.facebook.com/althea.mojedo26'; 
    } else if (input.includes('Tyrone')) {
        window.location.href = 'https://www.facebook.com/tyronejames.tangco'; 
    } else if (input.includes('William')) {
        window.location.href = 'https://www.facebook.com/william.boloferadornado'; 
    } else if (input.includes('Kissasian')) {
        window.location.href = 'https://kissasian.lu/'; 
    } else if (input.includes('My demon')) {
        window.location.href = 'https://kissasian.cam/series/my-demon/'; 
    } else if (input.includes('Convert Insta')) {
        window.location.href = 'https://allinonedownloader.com/instagram-video-downloader.php'; 
    } else if (input.includes('Convert You')) {
        window.location.href = 'https://mp3-convert.org/youtube-to-mp3-converters/';
    } else {
        // Redirect to Google search
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(input);
    }
}
