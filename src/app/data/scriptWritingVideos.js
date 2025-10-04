export const scriptWritingPrograms = [
  {
    id: 1,
    programTitle: "فيلا الاطباء - روشتة رمضان",
    programDescription: "برنامج طبي رمضاني يقدم نصائح صحية وطبية خلال شهر رمضان المبارك",
    programThumbnail: "/images/first-program/cover-img.jpg",
    totalEpisodes: 4,
    episodes: [
      {
        id: 1,
        episodeNumber: 1,
        title: "الحلقة الأولى - التغذية الصحية في رمضان",
        description: "نصائح طبية حول التغذية السليمة والصحية خلال شهر رمضان",
        thumbnail: "/images/episodes/villa-doctors-ep1.jpg",
        videoType: "embedded",
        videoUrl: "https://www.facebook.com/reel/1159040269063706",
        facebookUrl: "https://www.facebook.com/reel/1159040269063706",
        scriptHighlights: [
          "نصائح التغذية الرمضانية",
          "الوجبات المتوازنة",
          "تجنب الإفراط في الطعام"
        ]
      },
      {
        id: 2,
        episodeNumber: 2,
        title: "الحلقة الثانية - الصيام والأمراض المزمنة",
        description: "كيفية التعامل مع الأمراض المزمنة أثناء الصيام",
        thumbnail: "/images/episodes/villa-doctors-ep2.jpg",
        videoType: "embedded",
        videoUrl: "https://www.facebook.com/reel/9433293943374049",
        facebookUrl: "https://www.facebook.com/reel/9433293943374049",
        scriptHighlights: [
          "إدارة السكري في رمضان",
          "ضغط الدم والصيام",
          "استشارة الطبيب المختص"
        ]
      },
      {
        id: 3,
        episodeNumber: 3,
        title: "الحلقة الثالثة - الرياضة في رمضان",
        description: "أفضل الأوقات وأنواع التمارين المناسبة للصائمين",
        thumbnail: "/images/episodes/villa-doctors-ep3.jpg",
        videoType: "embedded",
        videoUrl: "https://www.facebook.com/reel/1815878405841681",
        facebookUrl: "https://www.facebook.com/reel/1815878405841681",
        scriptHighlights: [
          "أوقات التمرين المثلى",
          "تمارين خفيفة للصائمين",
          "تجنب الإجهاد المفرط"
        ]
      },
      {
        id: 4,
        episodeNumber: 4,
        title: "الحلقة الرابعة - الصحة النفسية في رمضان",
        description: "كيفية الحفاظ على الصحة النفسية والروحانية في رمضان",
        thumbnail: "/images/episodes/villa-doctors-ep4.jpg",
        videoType: "embedded",
        videoUrl: "https://www.facebook.com/reel/634258606122079",
        facebookUrl: "https://www.facebook.com/reel/634258606122079",
        scriptHighlights: [
          "إدارة التوتر والقلق",
          "الروحانية والسكينة",
          "التأمل والاسترخاء"
        ]
      }
    ]
  },
  {
    id: 2,
    programTitle: "معمل دراية للتحاليل الطبية",
    programDescription: "محتوى تسويقي متخصص لمعمل دراية للتحاليل الطبية يهدف إلى تعزيز الثقة وتوضيح أهمية التحاليل الطبية",
    programThumbnail: "/images/second-program/program-cover.png",
    totalEpisodes: 1,
    episodes: [
      {
        id: 1,
        episodeNumber: 1,
        title: "الحلقة الأولى - التسويق لمعمل دراية",
        description: "محتوى تسويقي احترافي لمعمل دراية للتحاليل الطبية",
        thumbnail: "/images/second-program/program-cover.png",
        videoType: "facebook_embedded",
        videoUrl: "https://www.facebook.com/reel/1673384899968036/",
        facebookUrl: "https://www.facebook.com/reel/1673384899968036/",
        embedCode: '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1673384899968036%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
        scriptHighlights: [
          "محتوى تسويقي طبي متخصص",
          "بناء الثقة مع العملاء",
          "توضيح أهمية التحاليل الطبية"
        ]
      }
    ]
  }
];

// Keep the old structure for backward compatibility if needed
export const scriptWritingVideos = [
  {
    id: 1,
    title: "Restaurant Promotional Video",
    description: "Engaging script for a local restaurant's promotional video showcasing their signature dishes and atmosphere.",
    thumbnail: "/images/videos/restaurant-thumb.jpg",
    videoType: "embedded",
    videoUrl: "/videos/restaurant-promo.mp4",
    facebookUrl: "https://www.facebook.com/watch/?v=123456789",
    category: "Restaurant & Food",
    scriptHighlights: [
      "Appetizing food descriptions",
      "Emotional storytelling",
      "Call-to-action for reservations"
    ]
  },
  {
    id: 2,
    title: "Medical Clinic Awareness Video",
    description: "Professional script for a medical clinic highlighting their services and patient care approach.",
    thumbnail: "/images/videos/medical-thumb.jpg",
    videoType: "facebook",
    videoUrl: null,
    facebookUrl: "https://www.facebook.com/watch/?v=987654321",
    category: "Medical & Healthcare",
    scriptHighlights: [
      "Trust-building language",
      "Medical expertise showcase",
      "Patient testimonial integration"
    ]
  }
];
