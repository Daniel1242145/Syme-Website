export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  keywords: string[];
  sections: {
    heading: string;
    body: string;
  }[];
};

const localBlogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-clean-carpets-christchurch",
    title: "How often should Christchurch homes clean their carpets?",
    excerpt:
      "A practical guide to 6-12 month carpet cleaning cycles, high-traffic areas and keeping carpets maintained between professional cleans.",
    category: "Carpet Cleaning",
    date: "2026-06-17",
    readTime: "3 min read",
    keywords: ["Carpet Cleaning Christchurch", "carpet maintenance", "Christchurch homes"],
    sections: [
      {
        heading: "Most homes suit a 6-12 month cycle",
        body: "For many Christchurch homes, professional carpet cleaning every 6-12 months is a sensible rhythm. Busy families, pets, allergies and high-traffic rooms can shorten that timeline, while lighter-use rooms may stay fresher for longer.",
      },
      {
        heading: "Maintenance matters between cleans",
        body: "Regular vacuuming, quick spot treatment and planned reminders help carpets stay fresh instead of waiting until they look tired. A maintenance plan gives you a clear prompt when the next clean is due.",
      },
      {
        heading: "Book before carpets look overdue",
        body: "Carpets are easier to protect when cleaning is proactive. Booking before heavy soil builds up helps maintain texture, presentation and the overall feel of the room.",
      },
    ],
  },
  {
    slug: "commercial-cleaning-frequency-christchurch",
    title: "How often should offices book commercial cleaning?",
    excerpt:
      "A simple way to think about commercial cleaning frequency for offices, retail spaces and shared facilities in Christchurch.",
    category: "Commercial Cleaning",
    date: "2026-06-16",
    readTime: "4 min read",
    keywords: ["Commercial Cleaning Christchurch", "office cleaning", "business cleaning"],
    sections: [
      {
        heading: "Traffic sets the schedule",
        body: "A small office may only need periodic carpet and window cleaning, while a busier workspace can benefit from weekly, fortnightly or monthly support. Entry areas and meeting rooms usually need attention first.",
      },
      {
        heading: "Presentation is part of the brand",
        body: "Clean carpets, clear windows and fresh shared spaces make a noticeable difference for staff, clients and visitors. Regular cleaning keeps the workspace consistent instead of relying on urgent one-off cleans.",
      },
      {
        heading: "Flexible plans work best",
        body: "Commercial cleaning should fit the business. Syme Carpet Cleaning offers flexible support without locking local businesses into long-term contracts.",
      },
    ],
  },
  {
    slug: "end-of-tenancy-cleaning-checklist-christchurch",
    title: "End of tenancy cleaning checklist for Christchurch rentals",
    excerpt:
      "What to prioritise before handover, from carpets and windows to high-touch presentation areas.",
    category: "End of Tenancy",
    date: "2026-06-15",
    readTime: "3 min read",
    keywords: ["End of Tenancy Cleaning Christchurch", "rental cleaning", "move-out clean"],
    sections: [
      {
        heading: "Start with the areas people notice first",
        body: "Entry spaces, carpets, windows, kitchens and bathrooms shape the first impression. These areas are worth planning early so the final handover feels clean and organised.",
      },
      {
        heading: "Do not leave carpets until the last minute",
        body: "Carpet cleaning can be easier to schedule when it is booked ahead of time. It also gives the property a fresher finish for inspections and photography.",
      },
      {
        heading: "Use a clear service scope",
        body: "A clear quote helps tenants, landlords and property managers understand what will be handled and what needs separate attention before keys are returned.",
      },
    ],
  },
  {
    slug: "window-cleaning-before-selling-home",
    title: "Why clean windows before selling a home?",
    excerpt:
      "Clean windows can make listing photos, open homes and interior light feel sharper before a property goes to market.",
    category: "Pre-Sale Cleaning",
    date: "2026-06-14",
    readTime: "2 min read",
    keywords: ["Window Cleaning Christchurch", "Pre-Sale Cleaning Christchurch", "property cleaning"],
    sections: [
      {
        heading: "Clear windows lift the whole property",
        body: "Windows affect light, outlook and first impressions. A clean finish helps rooms feel brighter and more cared for before photos or open homes.",
      },
      {
        heading: "Pair windows with carpet cleaning",
        body: "Pre-sale presentation is strongest when carpets, windows and key living areas all feel fresh. These details help buyers focus on the space rather than small signs of wear.",
      },
      {
        heading: "Book before photography",
        body: "The best time to clean windows is before listing photos, viewings and open homes. That timing gives the property the strongest visual start.",
      },
    ],
  },
];

async function getCmsPosts() {
  const cmsUrl = process.env.BLOG_CMS_URL;

  if (!cmsUrl) {
    return null;
  }

  const response = await fetch(cmsUrl, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as BlogPost[] | { posts?: BlogPost[] };

  if (Array.isArray(data)) {
    return data;
  }

  return Array.isArray(data.posts) ? data.posts : null;
}

export async function getBlogPosts() {
  return (await getCmsPosts()) ?? localBlogPosts;
}

export async function getBlogPost(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
