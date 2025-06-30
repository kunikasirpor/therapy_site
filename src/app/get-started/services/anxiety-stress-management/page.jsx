import ServiceLayout from '@/components/ServiceLayout';

export default function AnxietyStressManagementPage() {
  const serviceData = {
    serviceName: "Anxiety & Stress Management",
    mainHeading: "Struggling With Anxiety, Unworthiness, or Spiritual Confusion?",
    description: "You are created in the image of God — but if you don't know who that is, you may struggle with feelings of inadequacy, fear, and disconnection. Let's rediscover your true identity in Christ.",
    healingPoints: [
      {
        title: "Healing of Unworthiness",
        description: "Break free from the lie that you're not enough. Through Scripture and therapeutic techniques, we'll help you embrace your inherent worth as God's beloved creation."
      },
      {
        title: "Overcoming Anxiety in Isolation",
        description: "Learn biblical strategies to combat anxiety even when you feel alone, discovering how God's presence brings comfort and peace in every circumstance."
      },
      {
        title: "Healing Emotional Wounds",
        description: "Process past hurts through a faith-integrated approach that brings true healing to deep emotional pain and traumatic experiences."
      },
      {
        title: "Restoring Inner Peace",
        description: "Develop practical, Scripture-based tools to quiet anxious thoughts and experience the 'peace that surpasses all understanding' (Philippians 4:7)."
      },
    ],
    ctaText: "You Are God's Acknowledged—Let's Discover That Truth",
    healingFocusTags: ["Spiritual", "Godly", "Faith-Based", "Therapy", "Healing"],
    faithPathHeading: "A Faith-Based Path Toward Wholeness",
    faithPathDescription: "Through biblical wisdom and proven therapeutic tools, we'll help you overcome anxiety and stress by addressing both spiritual and psychological roots.",
    therapeuticApproaches: [
      {
        title: "Christian Cognitive Behavioral Therapy (CBT)",
        description: "Identify and transform anxious thought patterns using techniques grounded in both psychology and biblical truth."
      },
      {
        title: "Healing Prayer & Identity Work",
        description: "Experience inner transformation through prayerful reflection and exercises that reinforce your identity in Christ."
      },
      {
        title: "Creative Spiritual Expressives",
        description: "Use art, journaling, and other creative methods to process emotions and connect with God in new ways."
      },
    ],
    mainServiceImage: "/images/service-img-1.jpg",
    faithPathImage: "/images/service-anxiety.jpg",
    heroImage: "/images/service-img-1.jpg",
    // CUSTOM BUTTON TEXTS FOR THIS PAGE
    healingCtaButtonText: "Reignite Your Strength",
    faithPathCtaButtonText: "Discover Your Strength",
  };

  return <ServiceLayout {...serviceData} />;
}