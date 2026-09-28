export interface AboutStoryItem {
  id: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  paragraphs: string[];
  quote: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export interface AboutStoryData {
  items: AboutStoryItem[];
}

export const aboutStoryData: AboutStoryData = {
  items: [
    {
      id: "our-beginning",
      eyebrow: "The art of celebration",
      titleLine1: "A borrowed van, full of",
      titleLine2: "Marigolds",
      paragraphs: [
        "Riwaaz began with a small team, a borrowed van full of marigolds, and one conviction: that celebrations in Nepal deserve to be planned with the care of a wedding in our own family. The word 'riwaaz' means habit, ritual, the way things are done. We chose it because a celebration, done properly, becomes a riwaaz: the story a family tells for generations.",
        "Years on, we are a full-scale event house — designers, florists, producers and hospitality specialists — yet every celebration across Kathmandu, Itahari, and beyond is still planned as if for our own.",
      ],
      quote: "Riwaaz: habit, ritual, the way things are done.",
      image: "/assets/story-florist.jpg",
      imageAlt: "Riwaaz Events floral designers installing grand wedding ceremonial arch",
      imagePosition: "right",
    },
    {
      id: "bespoke-curation",
      eyebrow: "Bespoke Artistry",
      titleLine1: "Every petal handpicked for",
      titleLine2: "Your Story",
      paragraphs: [
        "No two love stories are identical, and no two celebrations should ever look the same. From hand-tied bridal florals and heritage mandap aesthetics to contemporary candlelit reception scapes, we design immersive spaces that celebrate your family's traditions, individuality, and joyful moments.",
        "We don't believe in generic decor packages. Every botanical palette, fabric drape, and architectural accent is curated to evoke warmth, intimacy, and timeless grandeur that feels effortlessly authentic to you and unforgettable to your guests.",
      ],
      quote: "Crafting celebrations as distinct as the vows you make.",
      image: "/assets/story-bouquet.jpg",
      imageAlt: "Exquisite hand-tied bridal bouquet with delicate roses and eucalyptus",
      imagePosition: "left",
    },
    {
      id: "revered-hospitality",
      eyebrow: "Flawless Execution",
      titleLine1: "Feasts prepared with",
      titleLine2: "Revered Hospitality",
      paragraphs: [
        "In Nepali culture, welcoming guests with open-hearted generosity is at the soul of every ritual. Our catering and hospitality coordinators curate seamless culinary journeys where beloved traditional recipes meet refined gourmet presentation — served with grace, warmth, and attentive care.",
        "Behind the scenes, our seasoned production managers coordinate timelines, artists, and vendor logistics with quiet precision. From the initial welcome toast to the final tearful goodbye, you can immerse yourself completely in the celebration, knowing every detail is flawlessly handled.",
      ],
      quote: "Hospitality where every guest is honored like family.",
      image: "/assets/story-culinary.jpg",
      imageAlt: "Executive banquet chefs garnishing fine-dining courses for wedding celebration",
      imagePosition: "right",
    },
  ],
};
