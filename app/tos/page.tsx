/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "TOS/Policies" });

const policySections: {
  title: string;
  paragraphs?: string[];
  items?: string[];
}[] = [
  {
    title: "Land Acknowledgement",
    paragraphs: [
      "The University of Guelph resides within the Dish with One Spoon wampum, an agreement between the Haudenosaunee and Anishinaabeg to share and care for the land. The Guelph campus is located within the Between the Lakes Purchase and on the treaty lands of the Mississaugas of the Credit. These lands reflect the long-standing and ongoing relationships Indigenous peoples have with the land.",
    ],
  },
  {
    title: "Terms of Conduct",
    paragraphs: [
      "Ākēdo Festival staff and volunteers reserve the right to issue warnings or remove attendees from the convention in the event of non-compliance with Terms of Conduct or convention policies. Campus security and/or law enforcement may be involved if necessary. Attendees may be held responsible for any damages caused to venue property, equipment, or event materials. Any fines, penalties, or legal consequences resulting from an individual’s actions will be the responsibility of the individual involved.",
    ],
  },
  {
    title: "Venue Regulations",
    items: [
      "The Ākēdo Festival is hosted on private property. Guests are expected to adhere to all University of Guelph policies. Attendees must remain within designated event areas and are not permitted to access other parts of campus, such as classrooms and residences, unless otherwise authorized.",
      "Guests are expected to comply with all applicable laws and bylaws of Guelph, Ontario, Canada.",
    ],
  },
  {
    title: "Acquiring Admission",
    items: [
      "Tickets can be purchased through our official website.",
      "Discounts may be applied at checkout. All discount codes are subject to their stated terms and conditions. Free giveaway tickets require a valid “purchased” ticket obtained through the associated discount code. Abuse or misuse of discount codes may result in the cancellation of the associated purchase or ticket.",
      "Each ticket will be issued a QR code. Do not scan or duplicate your QR code. Once a ticket is deactivated it will no longer be valid. Tickets will be scanned at the venue entrance.",
      "Tickets may be deemed invalid prior to the convention if they are found to have been obtained unlawfully or in violation of our Terms of Service or policies.",
    ],
  },
  {
    title: "Email List",
    items: [
      "All purchases made through our Zeffy ticketing platform will automatically add the purchaser’s email address to a confidential mailing list.",
      "Recipients may opt out of future communications at any time using the unsubscribe option included at the bottom of our emails.",
    ],
  },
  {
    title: "Consent to Photography",
    items: [
      "All participants of the Ākēdo Festival automatically consent to being photographed or recorded by the official event staff for promotional and marketing purposes. Media captured by staff may be used solely for Ākēdo Festival purposes. This consent does not extend to personal use by staff, including portfolios or personal social media pages, for which explicit consent from the individual(s) depicted is required. If you wish to opt out of official photography, please contact the organizing team via email by October 24th.",
      "All attendees, guests, media, sponsors, and others must obtain clear verbal consent prior to taking photographs or videos of others. Agreement to one photo or interaction does not imply ongoing or repeated permission.",
      "Names or logos of associated companies, groups, or organisations may appear in photographs.",
    ],
  },
  {
    title: "Badges and Lanyards",
    items: [
      "Passes must be worn at all times when on convention grounds.",
      "Lost passes are subject to a replacement fee.",
      "Ākēdo Festival reserves the right to refuse pass replacements.",
    ],
  },
  {
    title: "Refund/Exchange Policy",
    items: [
      "All tickets are final sale.",
      "Complimentary and/or giveaway tickets hold no cash value and are not eligible for refund, exchange, transfer of value, or monetary compensation.",
    ],
  },
  {
    title: "Family-Friendly Environment",
    items: [
      "Children under the age of 13 must be accompanied by a parent or legal guardian.",
      "Parents and guardians are responsible for the conduct and supervision of their children at all times.",
      "All attendees are expected to maintain family friendly behaviour throughout the convention. NSFW content including public displays of affection (PDA) are not permitted.",
    ],
  },
  {
    title: "Accessibility",
    items: [
      "The venue is equipped with ramps, elevators, and accessible washrooms on all floors of the convention. Accessible routes are available throughout the venue. Staff will be on-site to provide assistance if needed.",
      "We will make reasonable efforts to accommodate dietary restrictions and allergy concerns where applicable.",
      "Service animals and emotional support animals are permitted without prior approval.",
      "Misuse of accommodations, including any situation where a service animal poses a safety risk (such as aggressive or disruptive behaviour), may result in removal from the convention.",
    ],
  },
  {
    title: "Vendors & Artists",
    items: [
      "Only individuals with contracts approved by the Ākēdo Festival are permitted to conduct sales within convention spaces, parking lots or outside convention spaces.",
      "Ākēdo Festival does not assume responsibility for mediating disputes between vendors and dissatisfied customers. It is advisable to always request a receipt for purchases.",
    ],
  },
  {
    title: "Cosplay Guidelines",
    items: [
      "All attendees, whether in costume or regular attire, must ensure their attire does not compromise their own safety or the safety of others.",
      "Ākēdo Festival reserves the right to ask attendees to change and/or leave if their cosplay is deemed inappropriate or offensive.",
      "Costumes and accessories must not include hate symbols or content that is racist, sexist, discriminatory, political, or otherwise offensive or unsafe.",
      "Nudity is strictly prohibited. Life-like bodysuits that display nudity are not permitted. Fetish elements including props and accessories are prohibited.",
      "Excessive gore, or frightening elements are prohibited.",
      "Footwear with soles must be worn within festival space. “Invisible” shoes are acceptable for cosplay purposes.",
      "Individuals wearing costumes that are bulky, restrict vision or movement, should be accompanied by an escort in high-traffic areas. In the absence of an escort, attendees may be required to remove any costume elements deemed unsafe. Trails, extensions, and other costume components must not drag on the floor or create tripping hazards.",
    ],
  },
  {
    title: "Weapons",
    paragraphs: [
      "Live firearms, weapons prohibited by Canadian law, replicas of contemporary firearms, projectile weapons, props made of metal, and yaoi/yuri paddles are strictly prohibited. Examples include, but are not limited to:",
    ],
    items: [
      "Butterfly Knives (Bali-Song) or Switchblade/Drop Blade style knives.",
      "Nunchucks, Tonfas, Shurikens, or other martial arts weapons.",
      "Law enforcement items such as batons, tasers, or mace.",
      "Prop weapons must be clearly fictional and not mistakable for real weapons.",
      "All props must be properly holstered, sheathed, or slung, unless posing for photographs. All props must be carried safely and remain under your control at all times. Horseplay regardless of whether participants are consenting parties is not permitted.",
      "Ākēdo Festival reserves the right to deny or remove any prop weapon at its discretion.",
    ],
  },
  {
    title: "Prohibited Actions Include",
    items: [
      "Violence, stalking, harassment, pressuring, hate speech, and verbal abuse.",
      "Cutting in lines, pushing, horseplay, and disrespectful behaviour.",
      "Weapons, water guns, laser pointers, fireworks, and flammable liquids.",
      "Excessively noisy props, or activities that may startle or disrupt others.",
      "Hoverboards or other powered wheeled devices, excluding medical devices.",
      "Drones or other flying devices, and helium-filled balloons.",
      "Smoking (tobacco or cannabis), vaping (with or without nicotine), alcohol, and drugs. Any attendees deemed to be under the influence will be denied entry, and be asked to leave the premises.",
    ],
  },
  {
    title: "Animals",
    items: [
      "No pets are permitted within the convention venue; with the exclusion of those with medical related accommodations.",
    ],
  },
  {
    title: "Privacy Policy",
    items: [
      "Personal information, defined as any data that can distinguish, identify, or contact a specific individual, will be held in strict confidence and utilised solely for the purposes for which it was collected.",
      "The Ākēdo Festival is committed to safeguarding the privacy of personal information belonging to our attendees, organizers, sponsors, and volunteers. Ākēdo Festival collects, uses, and discloses personal information with care and subject to consent.",
      "Volunteers and the organising team will have access to this information in a restricted access system.",
    ],
  },
];

export default function TosPage() {
  return (
    <main className="bg-white py-24 md:py-32">
      <Container className="max-w-4xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Heading level="h1" className="text-brand-purple">
              TOS/Policies
            </Heading>
            <p className="text-lg text-black/75">
              Terms of Service and policies for Ākēdo Festival.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {policySections.map((section) => (
              <section
                className="border-brand-purple/25 rounded-2xl border bg-[#d8c9f2] p-6 md:p-8"
                key={section.title}
              >
                <h2 className="font-brand text-brand-purple mb-4 text-3xl font-bold">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4 text-base leading-relaxed md:text-lg">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items ? (
                    <ul className="flex list-disc flex-col gap-3 pl-6">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
