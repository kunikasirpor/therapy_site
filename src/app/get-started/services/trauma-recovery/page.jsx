import ServiceLayout from '@/components/ServiceLayout';

export default function TraumaRecoveryPage() {
  const serviceData = {
    serviceName: "Trauma Recovery",
    mainHeading: "Healing From Past Wounds and Finding Freedom",
    description: "Trauma can cast a long shadow, impacting your present and future. I offer a safe, compassionate space to process painful experiences and reclaim your life, guiding you towards wholeness and resilience.",
    healingPoints: [
      { title: "Processing Traumatic Memories", description: "Gently and effectively work through past traumatic events to reduce their emotional intensity." },
      { title: "Coping Skills Development", description: "Learn practical strategies to manage triggers, regulate emotions, and reduce anxiety related to trauma." },
      { title: "Restoring Safety & Trust", description: "Rebuild a sense of safety within yourself and in your relationships, fostering renewed trust." },
      { title: "Reclaiming Your Identity", description: "Discover your true self beyond the trauma, empowering you to live a life of purpose and peace." },
    ],
    ctaText: "Take the First Step Towards Healing",
    healingFocusTags: ["PTSD", "Abuse", "Grief", "Resilience", "Empowerment"],
    faithPathHeading: "Spiritual Foundations for Trauma Healing",
    faithPathDescription: "Integrating psychological expertise with biblical truths, we address the spiritual dimensions of trauma, inviting God's comfort and restorative power into your healing journey.",
    therapeuticApproaches: [
      { title: "Eye Movement Desensitization and Reprocessing (EMDR) Informed", description: "Utilize an evidence-based approach to help process distressing memories and reduce their lasting effects." },
      { title: "Cognitive Processing Therapy (CPT) Principles", description: "Challenge unhelpful thoughts and beliefs that keep you stuck in the cycle of trauma." },
      { title: "Biblical Narrative & Prayer", description: "Explore the healing power of scripture and prayer to find spiritual solace and strength amidst your pain." },
    ],
    mainServiceImage: "/images/service-trauma.jpg", // Placeholder
    faithPathImage: "/images/service-trauma-faith.jpg", // Placeholder
    heroImage: "/images/service-img-3.jpg", // 👈 NEW
    // CUSTOM BUTTON TEXTS FOR THIS PAGE
    healingCtaButtonText: "Let's Heal",
    faithPathCtaButtonText: "Discover How You Can Heal",
  };

  return <ServiceLayout {...serviceData} />;
}