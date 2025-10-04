"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DrAhmedAboKreshaArticlesPage() {
  const [sortBy, setSortBy] = useState("newest");

  // Real articles data for Dr. Ahmed Abo Kresha
  const articles = [
    {
      id: 1,
      title: "رؤية دكتور أحمد أبو كريشة للرعاية الصحية",
      titleEn: "Dr. Ahmed Abo Kresha's Vision for Healthcare",
      description: "رؤية شاملة للرعاية الصحية المتطورة وأهمية الطب التخصصي في علاج الأمراض العصبية.",
      excerpt: "يقدم الدكتور أحمد أبو كريشة رؤيته الشاملة للرعاية الصحية المتقدمة...",
      publishDate: "2024-03-15",
      readTime: "8 min read",
      wordCount: "2,500",
      contentType: "Medical Vision",
      targetAudience: "المرضى والمهتمين بالرعاية الصحية",
      seoKeywords: ["رعاية صحية", "طب الأعصاب", "دكتور أحمد أبو كريشة", "رؤية طبية"],
      tags: ["Healthcare", "Neurology", "Medical Vision"],
      metaDescription: "رؤية دكتور أحمد أبو كريشة الشاملة للرعاية الصحية المتطورة والطب التخصصي.",
      articleUrl: "https://ahmdabokresha.com/%d8%b1%d8%a4%d9%8a%d8%a9-%d8%af%d9%83%d8%aa%d9%88%d8%b1-%d8%a3%d8%ad%d9%85%d8%af-%d8%a3%d8%a8%d9%88-%d9%83%d8%b1%d9%8a%d8%b4%d8%a9-%d9%84%d9%84%d8%b1%d8%b9%d8%a7%d9%8a%d8%a9-%d8%a7%d9%84%d8%b5%d8%ad/"
    },
    {
      id: 2,
      title: "أسباب ضعف الأعصاب",
      titleEn: "Causes of Nerve Weakness",
      description: "دليل شامل حول أسباب ضعف الأعصاب وطرق التشخيص والعلاج المتاحة.",
      excerpt: "يعتبر ضعف الأعصاب من المشاكل الصحية الشائعة التي تؤثر على جودة الحياة...",
      publishDate: "2024-03-10",
      readTime: "6 min read",
      wordCount: "1,800",
      contentType: "Medical Guide",
      targetAudience: "المرضى والمهتمين بصحة الأعصاب",
      seoKeywords: ["ضعف الأعصاب", "أمراض الأعصاب", "علاج الأعصاب", "طب الأعصاب"],
      tags: ["Neurology", "Nerve Health", "Medical Treatment"],
      metaDescription: "تعرف على أسباب ضعف الأعصاب وطرق التشخيص والعلاج مع دكتور أحمد أبو كريشة.",
      articleUrl: "https://ahmdabokresha.com/%d8%a3%d8%b3%d8%a8%d8%a7%d8%a8-%d8%b6%d8%b9%d9%81-%d8%a7%d9%84%d8%a3%d8%b9%d8%b5%d8%a7%d8%a8/"
    },
    {
      id: 3,
      title: "عملية استئصال ورم الدماغ الحميد",
      titleEn: "Benign Brain Tumor Removal Surgery",
      description: "معلومات شاملة حول عملية استئصال أورام الدماغ الحميدة والتقنيات الجراحية المتقدمة.",
      excerpt: "تعتبر عملية استئصال ورم الدماغ الحميد من العمليات الدقيقة التي تتطلب خبرة عالية...",
      publishDate: "2024-03-05",
      readTime: "10 min read",
      wordCount: "3,200",
      contentType: "Surgical Procedure",
      targetAudience: "المرضى وأسرهم والمهتمين بجراحة الأعصاب",
      seoKeywords: ["ورم الدماغ الحميد", "جراحة المخ", "استئصال الأورام", "جراحة الأعصاب"],
      tags: ["Brain Surgery", "Neurosurgery", "Tumor Removal"],
      metaDescription: "دليل شامل حول عملية استئصال ورم الدماغ الحميد والتقنيات الجراحية المتطورة.",
      articleUrl: "https://ahmdabokresha.com/%d8%b9%d9%85%d9%84%d9%8a%d8%a9-%d8%a7%d8%b3%d8%aa%d8%a6%d8%b5%d8%a7%d9%84-%d9%88%d8%b1%d9%85-%d8%a7%d9%84%d8%af%d9%85%d8%a7%d8%ba-%d8%a7%d9%84%d8%ad%d9%85%d9%8a%d8%af/"
    },
    {
      id: 4,
      title: "تشوهات الجمجمة عند الكبار",
      titleEn: "Skull Deformities in Adults",
      description: "دراسة شاملة حول تشوهات الجمجمة عند البالغين وطرق العلاج الجراحية المتاحة.",
      excerpt: "تشوهات الجمجمة عند الكبار قد تكون خلقية أو مكتسبة وتتطلب تقييماً دقيقاً...",
      publishDate: "2024-02-28",
      readTime: "7 min read",
      wordCount: "2,100",
      contentType: "Medical Condition",
      targetAudience: "المرضى والمهتمين بجراحة الجمجمة",
      seoKeywords: ["تشوهات الجمجمة", "جراحة الجمجمة", "تشوهات خلقية", "جراحة تجميلية"],
      tags: ["Skull Surgery", "Cranial Deformities", "Reconstructive Surgery"],
      metaDescription: "معلومات شاملة حول تشوهات الجمجمة عند الكبار وخيارات العلاج الجراحية المتاحة.",
      articleUrl: "https://ahmdabokresha.com/%d8%aa%d8%b4%d9%88%d9%87%d8%a7%d8%aa-%d8%a7%d9%84%d8%ac%d9%85%d8%ac%d9%85%d8%a9-%d8%b9%d9%86%d8%af-%d8%a7%d9%84%d9%83%d8%a8%d8%a7%d8%b1/"
    },
    {
      id: 5,
      title: "الأورام الأرومية النخاعية",
      titleEn: "Spinal Cord Tumors",
      description: "دليل تفصيلي حول الأورام الأرومية النخاعية وطرق التشخيص والعلاج الحديثة.",
      excerpt: "الأورام الأرومية النخاعية من الأورام النادرة التي تصيب النخاع الشوكي...",
      publishDate: "2024-02-20",
      readTime: "9 min read",
      wordCount: "2,700",
      contentType: "Medical Research",
      targetAudience: "الأطباء والمرضى والباحثين",
      seoKeywords: ["أورام النخاع الشوكي", "أورام أرومية", "جراحة العمود الفقري", "طب الأعصاب"],
      tags: ["Spinal Tumors", "Neurosurgery", "Medical Research"],
      metaDescription: "معلومات طبية متخصصة حول الأورام الأرومية النخاعية وأحدث طرق العلاج.",
      articleUrl: "https://ahmdabokresha.com/%d8%a7%d9%84%d8%a3%d9%88%d8%b1%d8%a7%d9%85-%d8%a7%d9%84%d8%a3%d8%b1%d9%88%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d9%86%d8%ae%d8%a7%d8%b9%d9%8a%d8%a9/"
    },
    {
      id: 6,
      title: "جراحة المخ والأعصاب الوعائية",
      titleEn: "Vascular Neurosurgery",
      description: "دليل شامل حول جراحة المخ والأعصاب الوعائية وعلاج أمراض الأوعية الدموية الدماغية.",
      excerpt: "جراحة المخ والأعصاب الوعائية تتطلب دقة عالية وخبرة متخصصة في علاج الأوعية الدموية...",
      publishDate: "2024-02-15",
      readTime: "12 min read",
      wordCount: "3,600",
      contentType: "Surgical Specialty",
      targetAudience: "الأطباء والمتخصصين والمرضى",
      seoKeywords: ["جراحة الأوعية الدموية", "جراحة المخ", "أمراض الأوعية الدماغية", "جراحة الأعصاب"],
      tags: ["Vascular Surgery", "Brain Surgery", "Neurovascular"],
      metaDescription: "دليل متخصص في جراحة المخ والأعصاب الوعائية وعلاج أمراض الأوعية الدموية الدماغية.",
      articleUrl: "https://ahmdabokresha.com/%d8%ac%d8%b1%d8%a7%d8%ad%d8%a9-%d8%a7%d9%84%d9%85%d8%ae-%d9%88%d8%a7%d9%84%d8%a3%d8%b9%d8%b5%d8%a7%d8%a8-%d8%a7%d9%84%d9%88%d8%b9%d8%a7%d8%a6%d9%8a%d8%a9/"
    },
    {
      id: 7,
      title: "الأمراض القلبية الوعائية",
      titleEn: "Cardiovascular Diseases",
      description: "معلومات شاملة حول الأمراض القلبية الوعائية وطرق الوقاية والعلاج الحديثة.",
      excerpt: "الأمراض القلبية الوعائية من أكثر الأمراض انتشاراً وتتطلب رعاية طبية متخصصة...",
      publishDate: "2024-02-10",
      readTime: "8 min read",
      wordCount: "2,400",
      contentType: "Medical Education",
      targetAudience: "عامة الناس والمرضى",
      seoKeywords: ["أمراض القلب", "أمراض الأوعية الدموية", "الوقاية من أمراض القلب", "صحة القلب"],
      tags: ["Cardiology", "Heart Health", "Prevention"],
      metaDescription: "دليل شامل حول الأمراض القلبية الوعائية وطرق الوقاية والعلاج مع نصائح طبية مهمة.",
      articleUrl: "https://ahmdabokresha.com/%d8%a7%d9%84%d8%a3%d9%85%d8%b1%d8%a7%d8%b6-%d8%a7%d9%84%d9%82%d9%84%d8%a8%d9%8a%d8%a9-%d8%a7%d9%84%d9%88%d8%b9%d8%a7%d8%a6%d9%8a%d8%a9/"
    },
    {
      id: 8,
      title: "ما هو مرض التوحد؟",
      titleEn: "What is Autism?",
      description: "دليل شامل حول مرض التوحد وأعراضه وطرق التشخيص والعلاج المتاحة.",
      excerpt: "مرض التوحد هو اضطراب في النمو العصبي يؤثر على التواصل والسلوك الاجتماعي...",
      publishDate: "2024-02-08",
      readTime: "9 min read",
      wordCount: "2,800",
      contentType: "Medical Guide",
      targetAudience: "الأهالي والمهتمين بصحة الأطفال",
      seoKeywords: ["مرض التوحد", "اضطراب طيف التوحد", "أعراض التوحد", "علاج التوحد"],
      tags: ["Autism", "Neurodevelopmental", "Pediatric"],
      metaDescription: "تعرف على مرض التوحد وأعراضه وطرق التشخيص والعلاج مع دكتور أحمد أبو كريشة.",
      articleUrl: "https://ahmdabokresha.com/%d9%85%d8%a7-%d9%87%d9%88-%d9%85%d8%b1%d8%b6-%d8%a7%d9%84%d8%aa%d9%88%d8%ad%d8%af%d8%9f/"
    },
    {
      id: 9,
      title: "كيفية التعامل مع الصداع النصفي",
      titleEn: "How to Deal with Migraines",
      description: "نصائح وإرشادات طبية للتعامل مع الصداع النصفي وطرق الوقاية والعلاج.",
      excerpt: "الصداع النصفي من أكثر أنواع الصداع إزعاجاً ويتطلب فهماً عميقاً لطرق العلاج...",
      publishDate: "2024-02-05",
      readTime: "7 min read",
      wordCount: "2,200",
      contentType: "Medical Treatment",
      targetAudience: "المرضى المصابين بالصداع النصفي",
      seoKeywords: ["الصداع النصفي", "علاج الصداع", "الوقاية من الصداع", "طب الأعصاب"],
      tags: ["Migraine", "Headache", "Pain Management"],
      metaDescription: "تعلم كيفية التعامل مع الصداع النصفي وطرق الوقاية والعلاج الفعالة.",
      articleUrl: "https://ahmdabokresha.com/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%b9%d8%a7%d9%85%d9%84-%d9%85%d8%b9-%d8%a7%d9%84%d8%b5%d8%af%d8%a7%d8%b9-%d8%a7%d9%84%d9%86%d8%b5%d9%81%d9%8a/"
    },
    {
      id: 10,
      title: "السكتة الدماغية",
      titleEn: "Stroke",
      description: "معلومات شاملة حول السكتة الدماغية وأعراضها وطرق الوقاية والعلاج الطارئ.",
      excerpt: "السكتة الدماغية حالة طبية طارئة تتطلب تدخلاً سريعاً لإنقاذ حياة المريض...",
      publishDate: "2024-02-03",
      readTime: "11 min read",
      wordCount: "3,400",
      contentType: "Emergency Medicine",
      targetAudience: "عامة الناس والمرضى وأسرهم",
      seoKeywords: ["السكتة الدماغية", "جلطة الدماغ", "أعراض السكتة", "علاج السكتة"],
      tags: ["Stroke", "Emergency", "Brain Health"],
      metaDescription: "دليل شامل حول السكتة الدماغية وأعراضها وطرق الوقاية والعلاج الطارئ.",
      articleUrl: "https://ahmdabokresha.com/%d8%a7%d9%84%d8%b3%d9%83%d8%aa%d8%a9-%d8%a7%d9%84%d8%af%d9%85%d8%a7%d8%ba%d9%8a%d8%a9/"
    },
    {
      id: 11,
      title: "الوقاية من الأمراض العصبية",
      titleEn: "Prevention of Neurological Diseases",
      description: "نصائح وإرشادات للوقاية من الأمراض العصبية والحفاظ على صحة الجهاز العصبي.",
      excerpt: "الوقاية من الأمراض العصبية تتطلب نمط حياة صحي ومتابعة طبية منتظمة...",
      publishDate: "2024-01-30",
      readTime: "8 min read",
      wordCount: "2,500",
      contentType: "Prevention Guide",
      targetAudience: "عامة الناس والمهتمين بالصحة",
      seoKeywords: ["الوقاية من الأمراض العصبية", "صحة الجهاز العصبي", "طب وقائي", "نمط حياة صحي"],
      tags: ["Prevention", "Neurology", "Health Lifestyle"],
      metaDescription: "تعرف على طرق الوقاية من الأمراض العصبية والحفاظ على صحة الجهاز العصبي.",
      articleUrl: "https://ahmdabokresha.com/%d8%a7%d9%84%d9%88%d9%82%d8%a7%d9%8a%d8%a9-%d9%85%d9%86-%d8%a7%d9%84%d8%a3%d9%85%d8%b1%d8%a7%d8%b6-%d8%a7%d9%84%d8%b9%d8%b5%d8%a8%d9%8a%d8%a9/"
    },
    {
      id: 12,
      title: "التهاب السحايا",
      titleEn: "Meningitis",
      description: "دليل طبي شامل حول التهاب السحايا وأعراضه وطرق التشخيص والعلاج.",
      excerpt: "التهاب السحايا من الأمراض الخطيرة التي تصيب الأغشية المحيطة بالمخ والنخاع الشوكي...",
      publishDate: "2024-01-28",
      readTime: "10 min read",
      wordCount: "3,100",
      contentType: "Medical Emergency",
      targetAudience: "الأطباء والمرضى وأسرهم",
      seoKeywords: ["التهاب السحايا", "التهاب الأغشية السحائية", "أعراض السحايا", "علاج السحايا"],
      tags: ["Meningitis", "Infection", "Emergency Medicine"],
      metaDescription: "معلومات طبية شاملة حول التهاب السحايا وأعراضه وطرق التشخيص والعلاج.",
      articleUrl: "https://ahmdabokresha.com/%d8%a7%d9%84%d8%aa%d9%87%d8%a7%d8%a8-%d8%a7%d9%84%d8%b3%d8%ad%d8%a7%d9%8a%d8%a7/"
    },
    {
      id: 13,
      title: "ما هو الاعتلال العصبي؟",
      titleEn: "What is Neuropathy?",
      description: "شرح مفصل للاعتلال العصبي وأنواعه وأسبابه وطرق العلاج المتاحة.",
      excerpt: "الاعتلال العصبي هو تلف أو خلل في الأعصاب الطرفية يؤثر على وظائف الجسم المختلفة...",
      publishDate: "2024-01-25",
      readTime: "9 min read",
      wordCount: "2,700",
      contentType: "Medical Condition",
      targetAudience: "المرضى والمهتمين بأمراض الأعصاب",
      seoKeywords: ["الاعتلال العصبي", "تلف الأعصاب", "أمراض الأعصاب الطرفية", "علاج الاعتلال"],
      tags: ["Neuropathy", "Nerve Damage", "Peripheral Nerves"],
      metaDescription: "تعرف على الاعتلال العصبي وأنواعه وأسبابه وطرق العلاج المتاحة.",
      articleUrl: "https://ahmdabokresha.com/%d9%85%d8%a7-%d9%87%d9%88-%d8%a7%d9%84%d8%a7%d8%b9%d8%aa%d9%84%d8%a7%d9%84-%d8%a7%d9%84%d8%b9%d8%b5%d8%a8%d9%8a%d8%9f/"
    },
    {
      id: 14,
      title: "جراحة المخ والأعصاب",
      titleEn: "Brain and Nerve Surgery",
      description: "دليل شامل حول جراحة المخ والأعصاب والتقنيات الحديثة المستخدمة.",
      excerpt: "جراحة المخ والأعصاب من أدق التخصصات الطبية وتتطلب خبرة عالية ومعدات متطورة...",
      publishDate: "2024-01-22",
      readTime: "12 min read",
      wordCount: "3,800",
      contentType: "Surgical Specialty",
      targetAudience: "الأطباء والمتخصصين والمرضى",
      seoKeywords: ["جراحة المخ", "جراحة الأعصاب", "عمليات الدماغ", "جراحة عصبية"],
      tags: ["Neurosurgery", "Brain Surgery", "Medical Specialty"],
      metaDescription: "دليل شامل حول جراحة المخ والأعصاب والتقنيات الحديثة في هذا التخصص.",
      articleUrl: "https://ahmdabokresha.com/%d8%ac%d8%b1%d8%a7%d8%ad%d8%a9-%d8%a7%d9%84%d9%85%d8%ae-%d9%88%d8%a7%d9%84%d8%a3%d8%b9%d8%b5%d8%a7%d8%a8-2/"
    },
    {
      id: 15,
      title: "4 فوائد لجراحة العمود الفقري الروبوتية",
      titleEn: "4 Benefits of Robotic Spine Surgery",
      description: "تعرف على فوائد استخدام الروبوت في جراحة العمود الفقري والتقنيات المتطورة.",
      excerpt: "جراحة العمود الفقري الروبوتية تمثل نقلة نوعية في عالم الجراحة العصبية...",
      publishDate: "2024-01-20",
      readTime: "8 min read",
      wordCount: "2,400",
      contentType: "Surgical Innovation",
      targetAudience: "المرضى والأطباء المهتمين بالتقنيات الحديثة",
      seoKeywords: ["جراحة العمود الفقري الروبوتية", "الروبوت الجراحي", "جراحة العمود الفقري", "تقنيات حديثة"],
      tags: ["Robotic Surgery", "Spine Surgery", "Medical Technology"],
      metaDescription: "اكتشف فوائد جراحة العمود الفقري الروبوتية والتقنيات المتطورة في هذا المجال.",
      articleUrl: "https://ahmdabokresha.com/4-%d9%81%d9%88%d8%a7%d8%a6%d8%af-%d9%84%d8%ac%d8%b1%d8%a7%d8%ad%d8%a9-%d8%a7%d9%84%d8%b9%d9%85%d9%88%d8%af-%d8%a7%d9%84%d9%81%d9%82%d8%b1%d9%8a-%d8%a7%d9%84%d8%b1%d9%88%d8%a8%d9%88%d8%aa%d9%8a%d8%a9/"
    },
    {
      id: 16,
      title: "معالجة الاضطرابات العصبية",
      titleEn: "Treatment of Neurological Disorders",
      description: "دليل شامل حول معالجة الاضطرابات العصبية المختلفة وأحدث طرق العلاج.",
      excerpt: "معالجة الاضطرابات العصبية تتطلب نهجاً شاملاً ومتعدد التخصصات...",
      publishDate: "2024-01-18",
      readTime: "10 min read",
      wordCount: "3,200",
      contentType: "Treatment Guide",
      targetAudience: "المرضى والأطباء والمتخصصين",
      seoKeywords: ["معالجة الاضطرابات العصبية", "علاج الأمراض العصبية", "طب الأعصاب", "اضطرابات عصبية"],
      tags: ["Neurological Treatment", "Medical Therapy", "Neurology"],
      metaDescription: "دليل شامل حول معالجة الاضطرابات العصبية وأحدث طرق العلاج المتاحة.",
      articleUrl: "https://ahmdabokresha.com/%d9%85%d8%b9%d8%a7%d9%84%d8%ac%d8%a9-%d8%a7%d9%84%d8%a7%d8%b6%d8%b7%d8%b1%d8%a7%d8%a8%d8%a7%d8%aa-%d8%a7%d9%84%d8%b9%d8%b5%d8%a8%d9%8a%d8%a9/"
    },
    {
      id: 17,
      title: "أحدث التطورات في جراحة المخ والأعصاب",
      titleEn: "Latest Developments in Neurosurgery",
      description: "استعراض لأحدث التطورات والتقنيات في مجال جراحة المخ والأعصاب.",
      excerpt: "مجال جراحة المخ والأعصاب يشهد تطورات مستمرة في التقنيات والأساليب العلاجية...",
      publishDate: "2024-01-15",
      readTime: "11 min read",
      wordCount: "3,500",
      contentType: "Medical Innovation",
      targetAudience: "الأطباء والباحثين والمهتمين بالطب",
      seoKeywords: ["تطورات جراحة المخ", "تقنيات حديثة", "جراحة الأعصاب", "ابتكارات طبية"],
      tags: ["Medical Innovation", "Neurosurgery", "Technology"],
      metaDescription: "تعرف على أحدث التطورات والتقنيات في مجال جراحة المخ والأعصاب.",
      articleUrl: "https://ahmdabokresha.com/%d8%a3%d8%ad%d8%af%d8%ab-%d8%a7%d9%84%d8%aa%d8%b7%d9%88%d8%b1%d8%a7%d8%aa-%d9%81%d9%8a-%d8%ac%d8%b1%d8%a7%d8%ad%d8%a9-%d8%a7%d9%84%d9%85%d8%ae-%d9%88%d8%a7%d9%84%d8%a3%d8%b9%d8%b5%d8%a7%d8%a8-%d9%85/"
    }
  ];

  // Sort articles
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.publishDate) - new Date(a.publishDate);
    } else if (sortBy === "oldest") {
      return new Date(a.publishDate) - new Date(b.publishDate);
    } else if (sortBy === "readTime") {
      return parseInt(a.readTime) - parseInt(b.readTime);
    }
    return 0;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Dr. Ahmed Abo Kresha Articles</h2>
        <Link
          href="/articles"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Categories
        </Link>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white shadow-lg">
            <Image
              src="/images/seo/articles/ahmdabokresha.png"
              alt="Dr. Ahmed Abo Kresha"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dr. Ahmed Abo Kresha</h3>
            <p className="text-gray-600 mb-3">
              Medical and healthcare articles focusing on professional medical content, patient education, and healthcare industry insights.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Medical Content", "Healthcare SEO", "Patient Education", "Medical Marketing"].map((topic, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore specialized medical and healthcare articles written for Dr. Ahmed Abo Kresha. Each article is crafted to provide valuable medical insights while maintaining SEO optimization for better search visibility.
      </p>

      {/* Sort Filter */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-sm font-medium text-gray-700">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#F2308D]"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="readTime">Read Time</option>
        </select>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedArticles.map((article) => (
          <a
            key={article.id}
            href={article.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
          >
            {/* Article Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  Medical Content
                </span>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{formatDate(article.publishDate)}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 leading-tight">
                {article.title}
              </h3>
              
              <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed">
                {article.description}
              </p>
            </div>

            {/* Article Content Preview */}
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Article Excerpt:</h4>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "{article.excerpt}"
                </p>
              </div>

              {/* SEO Information */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">SEO Details:</h4>
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                  <div>
                    <span className="font-medium">Word Count:</span> {article.wordCount}
                  </div>
                  <div>
                    <span className="font-medium">Content Type:</span> {article.contentType}
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-xs font-medium text-gray-700">Target Audience:</span>
                  <p className="text-xs text-gray-600">{article.targetAudience}</p>
                </div>
              </div>

              {/* SEO Keywords */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">SEO Keywords:</h4>
                <div className="flex flex-wrap gap-1">
                  {article.seoKeywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-xs bg-green-100 text-green-700"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta Description */}
              <div className="mb-4 p-3 bg-gray-50 rounded">
                <h4 className="text-xs font-semibold text-gray-700 mb-1">Meta Description:</h4>
                <p className="text-xs text-gray-600 italic">
                  "{article.metaDescription}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[#F2308D] font-medium text-sm">
                  Read Full Article
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-4">
            Need Medical Content Writing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Specialized in creating professional medical content that educates patients and establishes healthcare authority. 
            Every article is medically accurate, SEO-optimized, and patient-friendly.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Get Medical Articles
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
