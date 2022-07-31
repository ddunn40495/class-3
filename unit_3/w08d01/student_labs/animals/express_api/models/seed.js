const dogNames = require("dog-names");

const catNames = require("cat-names");

let catPics = [
  "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
  "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
  "https://i.cbc.ca/1.5664382.1595864702!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/health-coronavirus-britain-johnson.JPG",
  "https://cdn.hswstatic.com/gif/whiskers-sam.jpg",
  "https://www.munch.zone/wp-content/uploads/2015/01/Things-You-Didnt-Know-About-a-Cat%E2%80%99s-Whiskers.png",
  "https://cdn.britannica.com/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg",
  "https://www.iams.com/images/default-source/article-image/article_stomach-issues-in-cats-why-cats-vomit-and-what-to-do_header.jpg",
  "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg",
];

let breeds = ["golden retriever", "shih tzu", "german shepherd", "bulldog"];

let bulldogs = [
  "https://i.pinimg.com/originals/1c/e7/d2/1ce7d28427999254f00de282220469fe.jpg",
  "https://www.thesprucepets.com/thmb/Cj1LH91gaJUAKLfYNkXhwb6KYHc=/1350x1080/filters:no_upscale():max_bytes(150000):strip_icc()/1_American_Bulldog-5b339bcf4cedfd003712e3b5.jpg",
  "https://wagsandwhiskershouston.files.wordpress.com/2011/11/bulldog.jpg?w=584",
  "https://i.pinimg.com/originals/a2/d1/77/a2d177ba12e69f518532945c6dc966cd.jpg",
  "https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/04/FFYvauy.jpg",
  "https://theluxuryspot.com/wp-content/uploads/2012/11/bulldog-puppy.jpg",
  "https://lh3.googleusercontent.com/proxy/6W8UTPWCmT8tnf6g7fuzvKgGRV3JC2B6kEc11N_MqB6HFIU7p9oqr-4fAEfFkn0gjwKxYqOCfOiCPnvTC-w2SQxjWVqWZPhyRqjKcV85gJnuY_Qiy_Z5saFFy843LF_iqtpMI-DqzDyZwFi-7Yyu6ef2_0E",
  "https://i.pinimg.com/originals/a9/c1/2a/a9c12ac2ec9f59355b5680402fdc85c5.jpg",
  "https://mojly.com/wp-content/uploads/2017/11/cute-bull-dogs-pics-wallpapers-http3A2F2Fwww.champbulldogs.com2Fimages2Flakota20english20bulldog20puppies2.jpg",
];

let shihTzu = [
  "https://i.pinimg.com/originals/ac/4c/b9/ac4cb9537e3a736e2effaef2ce75ac15.jpg",
  "https://previews.123rf.com/images/torianime/torianime1707/torianime170700103/82860507-close-up-cute-shih-tzu-dog-lies-on-ground-waiting-for-the-boss.jpg",
  "https://www.cutepetdogs.com/adoptapet/2018/10/shih-tzu-dog.jpg",
  "https://lh3.googleusercontent.com/proxy/3lE-E4R3iteg_jNzAuRLTJOOd8CLGVe-SNejZZsqFdUnAEYiyPz1mM4bsP97AfMuKAYnqSb9epDcRY_mBFtmXQpl7Gq5OiNyrDrc9uHK7F58PdX9_A",
  "https://res.cloudinary.com/petrescue/image/upload/h_638,w_638,c_pad,q_auto:best,f_auto/petrescue-production-s3/uploads/pet_photos/9559_ea506_orig.jpg",
  "https://i2.wp.com/friendsofanimalswales.org.uk/wp-content/uploads/2019/04/leah3-2.jpg?fit=960%2C716&ssl=1",
  "https://petguidereviews.com/wp-content/uploads/2019/03/shih-tzu-names.jpg",
  "https://img2.pngio.com/all-about-the-pomeranian-shih-tzu-mix-dogable-yorkie-pomeranian-mix-png-257_300.png",
  "https://i.pinimg.com/originals/a8/47/5a/a8475a15fd1e3bc3dd7671376df1de50.jpg",
  "https://www.thepaws.net/wp-content/uploads/2018/11/shih-tzu-bichon-mix-crossbreed-13.jpg",
  "https://i.pinimg.com/originals/ca/f1/8f/caf18fc96b58e5e349502cfc2f746925.jpg",
  "https://i.pinimg.com/originals/0f/f2/ea/0ff2eada0f4046fce3871d332359ab0a.jpg",
];

let goldenRet = [
  "https://cdn.akc.org/content/hero/golden_retriever_august_hero.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/SlGApWUlXReqFHkhDX8MxuV9fTs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/12/805/n/1922243/b57736215e6a7d475775d1.49703223_/i/photos-golden-retriever-puppies.jpg",
  "https://i.pinimg.com/originals/53/a4/fb/53a4fb39b31623ea4c944e1959f4511e.jpg",
  "https://i.ytimg.com/vi/a6KGPBflhiM/sddefault.jpg",
  "https://petsidi.com/wp-content/uploads/2019/02/golden-retriever-babies-for-sale.jpg",
  "https://i.pinimg.com/originals/9a/3d/16/9a3d16446adb908a75f005170ba59651.jpg",
  "https://img.buzzfeed.com/buzzfeed-static/static/2018-07/10/13/campaign_images/buzzfeed-prod-web-01/16-golden-retrievers-that-are-so-cute-theyll-make-2-30829-1531242790-5_dblbig.jpg",
  "https://i.redd.it/cv0nrpyyowx11.png",
  "https://i.pinimg.com/originals/d1/6c/63/d16c63c1ff43de4b2a1a0349d0f0d206.jpg",
  "https://www.thesprucepets.com/thmb/dX6T-5odkQaWkqq1_vYzTjTMfFs=/1222x1080/filters:no_upscale():max_bytes(150000):strip_icc()/31170124_355309831644176_4994517524629422080_n-5b3a4d0ec9e77c003771e6a6.jpg",
  "https://d.newsweek.com/en/full/1581573/golden-retriever.jpg?w=1600&h=1600&q=88&f=3108a35d181e0a583d1e5e72defd6fd1",
  "https://i.pinimg.com/originals/48/73/e7/4873e762b1f32f0ffbbfd029097264c3.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/8wn6wAgNMhE-JEhRgFB9MTDmDbA/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/10/02/724/n/1922243/addurlw7iCyQ/i/photos-golden-retriever-puppies.jpg",
  "https://i.pinimg.com/originals/8d/82/9e/8d829ec69df2baeefb562091ed777195.jpg",
];

let germanShep = [
  "https://www.thesprucepets.com/thmb/ZYQvt49IrR78uuXVkpO-wTJuVKM=/735x0/16_Love-5bb4c12bc9e77c00263933b3.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/QYcQ17h-c7xh-evZHmaGSGI1l-U/0x159:2003x2162/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/07/875/n/24155406/9ffb00255d4b2e079b0b23.01360060_/i/Cute-Pictures-German-Shepherd-Puppies.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/QYcQ17h-c7xh-evZHmaGSGI1l-U/0x159:2003x2162/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/07/875/n/24155406/9ffb00255d4b2e079b0b23.01360060_/i/Cute-Pictures-German-Shepherd-Puppies.jpg",
  "https://i.pinimg.com/originals/a6/c4/21/a6c421aca45254dae05b9fa33a5093ff.jpg",
  "https://www.petsworld.in/blog/wp-content/uploads/2014/09/lying-under-the-table.jpg",
  "https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2020/04/01201218/Image-2-photos-of-cute-german-shepherd-puppies.png",
  "https://i.pinimg.com/originals/36/38/7d/36387d9d4a965a5112d70bf3de0bf180.jpg",
  "https://i.redd.it/axi6kuczxkj01.jpg",
  "https://pupstoday.com/wp-content/uploads/2018/06/german-shepherd-image.jpg",
  "https://cdn.pupmazing.com/wp-content/uploads/2019/03/german-shepherd-3404340_1280-1024x682.jpg",
  "https://i.pinimg.com/originals/41/71/85/417185b3e2a80ec1d0aa5227681b6398.jpg",
  "https://pupstoday.com/wp-content/uploads/2018/06/adorable-german-shepherd.jpg",
  "https://lh3.googleusercontent.com/proxy/MZRXl63HoHJwxuCDjlSf5A57__K_0UC-byNTv4lN-t0MyyMZVEZdFopTfMUJTpu0VSYOGDs3jF6R4sISLyBq0w4lS1kNK16xbPPGPqrxqPerV_8kXp2LmT-M4qoAa-kLgD1hBoMQLwpZW2Ln8nB_YUSlBMAZajfaa8G4owwuTg",
  "https://www.perfectpetBreeds.com/wp-content/uploads/2018/10/German-Shepherd.jpg",
];

let traits = [
  "Intelligent",
  "Trainable",
  "Loves Family",
  "Courageous",
  "Playful",
  "Affectionate",
  "Intelligent",
  "Like Outdoors",
];

let seeds = [];

const getTrait = () => {
  const num = Math.floor(Math.random() * traits.length);
  return traits[num];
};

const getPic = (params) => {
  let currArray = [...params];

  let ranNu = Math.floor(Math.random() * currArray.length);

  return currArray[ranNu];
};

for (let i = 0; i < 80; i++) {
  let petBreed = null;
  let species = "dog";
  let name = null;
  let pic = null;

  if (i < 15) {
    petBreed = breeds[0];
    name = dogNames.allRandom();
    pic = getPic(goldenRet);
  } else if (i < 30) {
    petBreed = breeds[1];
    name = dogNames.allRandom();
    pic = getPic(shihTzu);
  } else if (i < 45) {
    petBreed = breeds[2];
    name = dogNames.allRandom();
    pic = getPic(germanShep);
  } else if (i < 60) {
    petBreed = breeds[3];
    name = dogNames.allRandom();
    pic = getPic(bulldogs);
  } else {
    species = "cat";
    name = catNames.random();
    pic = getPic(catPics);
  }

  const newPet = {
    name: name,
    species: species,
    breed: petBreed,
    image: pic,
    age: Math.floor(Math.random() * 12),
    personalityTraits: [getTrait(), getTrait(), getTrait()],
  };

  seeds.push(newPet);
}

// console.log(seeds);

module.exports = seeds;
