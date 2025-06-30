import ServiceLayout from '@/components/ServiceLayout';

export default function RelationshipCounselingPage() {
  const serviceData = {
    serviceName: "Relationship Counseling",
    mainHeading: "Strengthen Your Bonds and Find Harmony in Relationships",
    description: "Relationships can be a source of immense joy and profound challenges. Through faith-based principles and compassionate guidance, we'll work to foster deeper connections, improve communication, and heal relational wounds.",
    healingPoints: [
      { title: "Improved Communication", description: "Learn effective strategies to express your needs and truly hear your partner, building a foundation of understanding." },
      { title: "Conflict Resolution", description: "Navigate disagreements constructively, turning challenges into opportunities for growth and deeper intimacy." },
      { title: "Building Trust & Intimacy", description: "Restore broken trust and rekindle passion, fostering a secure and vibrant connection." },
      { title: "Pre-Marital Counseling", description: "Prepare for a strong and lasting marriage built on shared values and mutual respect." },
    ],
    ctaText: "Cultivate Stronger, Healthier Connections",
    healingFocusTags: ["Couples", "Family", "Communication", "Conflict", "Intimacy"],
    faithPathHeading: "A Sacred Path to Relational Wholeness",
    faithPathDescription: "Drawing on timeless biblical wisdom and proven therapeutic techniques, we guide couples and individuals toward relationships that reflect God's love and design.",
    therapeuticApproaches: [
      { title: "Emotionally Focused Therapy (EFT) Principles", description: "Understand and reshape negative interaction cycles to create a more secure emotional bond." },
      { title: "Gottman Method Strategies", description: "Implement practical tools for conflict management, friendship building, and shared meaning." },
      { title: "Forgiveness & Reconciliation", description: "Navigate the complex process of forgiveness, releasing past hurts and embracing new beginnings." },
    ],
    mainServiceImage: "/images/service-relationships.jpg", // Placeholder
    faithPathImage: "/images/service-relationship-faith.jpg", // Placeholder
    heroImage: "/images/service-img-2.jpg", // 👈 NEW
    // CUSTOM BUTTON TEXTS FOR THIS PAGE
    healingCtaButtonText: "Restore Your Marriage",
    faithPathCtaButtonText: "Discover Your Marriage Strength",
  };

  return <ServiceLayout {...serviceData} />;
}