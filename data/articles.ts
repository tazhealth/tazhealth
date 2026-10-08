import { images } from './images';

export type Article = {
  slug: string;
  title: string;
  category: 'Health Tips' | 'Field Stories' | 'TAZ AI';
  date: string;
  author: string;
  image: string;
  excerpt: string;
  body: string[];
};

// Body lines starting with "## " render as subheadings; consecutive lines starting with "- " render as a bullet list.
export const articles: Article[] = [
{
  slug: 'health-fair-3-sagamu',
  title: 'Health Fair 3.0: free care for 500 people in Sagamu',
  category: 'Field Stories',
  date: 'Oct 8, 2026',
  author: 'TAZhealth Team',
  image: images.community,
  excerpt: 'Our largest outreach yet brought free screening, consultations and medicine to the people of Sagamu, Ogun State.',
  body: [
  'For many families, getting a health check is not a simple matter. It can mean taking time off work, paying for transport and consultation fees, and sitting in a queue for hours, often while feeling perfectly fine. So routine screening gets postponed, small problems go unnoticed, and people only seek care when something has become serious.',
  'Health Fair 3.0 was designed to remove those barriers. On 24 September 2025, TAZhealth, in association with the Babcock University Association of Medical Students (BUAMS) and the Adventist Medical Students Association of Nigeria, brought a full day of free healthcare to the people of Sagamu, Ogun State.',
  '## Why this outreach mattered',
  'Conditions like high blood pressure, diabetes and malaria are common in many communities, and some of them cause no obvious symptoms in the early stages. A person can live with raised blood pressure or blood sugar for a long time without knowing. By the time symptoms appear, the condition may already be affecting the heart, kidneys, eyes or other organs. Bringing screening, advice and treatment to one location, free of charge, gives people a chance to find out where they stand while problems are still easier to manage.',
  '## What the community received',
  'Everyone who came to Health Fair 3.0 had access to a range of services:',
  '- Health education sessions: Before and alongside the screenings, volunteers shared practical information on staying healthy, recognising warning signs and knowing when to seek care.',
  '- Free health checks: Participants could have their vital signs checked, including blood pressure, blood glucose and BMI. Malaria and HPV screening were also available.',
  '- Free medical consultations: Participants could speak directly with healthcare professionals about their results and any health concerns, ask questions and get guidance on what to do next.',
  '- Free medication: A diagnosis is only useful if it can be followed by treatment. By providing medication on site, the outreach helped ensure that people left with more than a test result.',
  '## The people involved',
  'Reaching so many people in one day took careful planning and a lot of coordination. BUAMS brought together volunteers to run the screenings, consultations and health talks, while we provided funding and organisational support, contributing ₦350,000 to the programme and deploying four volunteers to help it run smoothly.',
  'For the students involved, an outreach like this is also a chance to put their training into practice: listening to patients, explaining health information in plain language and seeing first-hand the health needs of the communities they will one day serve.',
  '## The impact',
  'We reached 500 people, making Health Fair 3.0 the largest outreach TAZhealth has carried out to date. Each of those 500 people received some combination of education, screening, consultation and treatment they might not otherwise have had access to.',
  'This event builds on work that began with our first outreach at Yemisi Alogi Orphanage and Children’s Home in Abeokuta in April 2025. Since then, the team has delivered outreaches focused on malaria prevention, community screening, maternal health and heart health, allowing us to directly reach a total of 1,018 people so far.',
  '## The future and beyond',
  'The outreach in Sagamu gave community members access to healthcare services they need. But the end goal is bigger: communities that are more health conscious and that take an active part in looking after their own health.',
  'We are grateful to BUAMS, to every volunteer who gave their time, and to the people of Sagamu who came out to take charge of their health. We look forward to reaching more communities in the months ahead.']

},
{
  slug: 'know-your-blood-pressure',
  title: 'High blood pressure has no symptoms. Here’s why you should check yours.',
  category: 'Health Tips',
  date: 'Sep 12, 2026',
  author: 'TAZhealth Team',
  image: images.hero,
  excerpt: 'You can feel completely healthy and still have dangerously high blood pressure. A quick check is the only way to know.',
  body: [
  'Imagine feeling completely healthy as you go about your day, going to school or work, exercising, eating and sleeping normally, only to discover that your blood pressure is dangerously high.',
  'This is one of the reasons high blood pressure is often called a “silent killer.”',
  '## What is high blood pressure?',
  'Blood pressure is the force of blood pushing against the walls of your blood vessels as your heart pumps blood around your body. When this pressure remains consistently high, it is called hypertension. The dangerous part is that most people will not know until it is too late. You may have hypertension for months or even years without headaches, dizziness, chest pain or any other warning sign.',
  '## Checking for hypertension',
  'The only reliable way to know your blood pressure is to measure it. A simple blood pressure check at a clinic, pharmacy or health centre, or with a validated home blood pressure monitor, can help identify a problem early.',
  'One high reading does not necessarily mean you have hypertension. Blood pressure can temporarily rise because of stress, physical activity, caffeine, pain or other factors. Persistently elevated readings need proper assessment by a healthcare professional.',
  '## Leaving it untreated',
  'Untreated hypertension can gradually damage important organs, leaving you vulnerable to:',
  '- Heart disease and heart failure',
  '- Stroke',
  '- Kidney disease',
  '- Eye problems and vision loss',
  '- Blood vessel complications',
  '## What to do',
  'You don’t have to wait until you feel sick before taking action. You can start by checking your blood pressure to know your condition.',
  'You can also reduce your risk by:',
  '- Eating more fruits and vegetables',
  '- Reducing excessive salt intake',
  '- Exercising regularly',
  '- Maintaining a healthy weight',
  '- Avoiding tobacco',
  '- Limiting excessive alcohol consumption',
  '- Taking prescribed blood pressure medication consistently',
  '- Attending routine health checks',
  'Checking your blood pressure takes only a few minutes, but knowing your vitals can help you identify a problem before it causes serious complications.',
  'Don’t wait for symptoms. Check your blood pressure and protect your future.']

},
{
  slug: 'why-we-come-back',
  title: 'Why we keep calling after the outreach tent comes down',
  category: 'Field Stories',
  date: 'Aug 28, 2026',
  author: 'TAZhealth Team',
  image: images.phone,
  excerpt: 'A screening is only the start. What happens in the weeks after decides whether care actually happens.',
  body: [
  'Free medical outreaches are one of the most visible forms of healthcare in Nigerian communities. A canopy goes up in a market, a church hall or a village square, volunteers set out tables, and within an hour there is a queue. People have their blood pressure and blood sugar checked, get tested for malaria, see a doctor and leave with medicine.',
  'Since our launch in April 2025, TAZhealth has run seven of these outreaches and reached 1,018 people. We are proud of every one of them. But one question has shaped our work from the start: what happens to people after we pack up and leave?',
  '## A single day is not enough',
  'An outreach can find a problem in minutes. A woman at Ilishan Market learns that her blood pressure is high. A man in Odogbolu finds out that his blood sugar is well above normal. A caregiver at an orphanage in Abeokuta learns that a child has malaria.',
  'Finding the problem is an important first step, but it is only the first step. High blood pressure and diabetes need months or years of care. A referral only helps if the person actually gets to the clinic. A prescription only works if the medicine is bought and taken correctly.',
  'In the weeks after an outreach, life gets in the way. Transport costs money. Work cannot be missed. The medicine runs out and nobody reminds you to get more. You start to feel fine and wonder if the reading was a mistake. Without anyone checking in, many people quietly drop out of care.',
  '## What follow-up looks like',
  'That is why we see follow-up as part of the outreach, not something extra. When someone is registered at one of our outreaches, we take down their contact details and note what they need next, whether that is a recheck, a referral to a clinic or simply a reminder to finish their medicine.',
  'In the days and weeks after, our volunteers reach out by phone call and text message. We ask simple questions. Did you get the drugs? Did you go to the clinic? How are you feeling? Where possible, we speak in the language people are most comfortable with, because people tell you more when they feel understood.',
  'When someone has not been able to follow the plan, we try to find out why and help where we can. Sometimes the answer is a cheaper clinic closer to home. Sometimes it is a second explanation of why the medicine matters. Sometimes it is just knowing that someone remembered them.',
  '## Built with partners',
  'None of this happens alone. Every outreach we have run has been a partnership: with the Babcock University Association of Medical Students, Babcock University Teaching Hospital, the Babcock University Public Health Department, NiMSA, EOhealth and many others. Our partners bring clinicians, students, equipment and trust within their communities.',
  'Together, we have tested children for malaria and handed out mosquito nets, taught expecting mothers about caring for themselves and their babies, marked World Heart Day with free checks and a fitness session, and reached 500 people in a single day at Health Fair 3.0 in Sagamu.',
  '## Why it is worth the effort',
  'Follow-up is slower and less visible than a busy outreach day. There are no queues and no photos, just phone calls and messages. But it is where much of the real difference is made. It turns a single reading into a treatment plan, and a referral slip into a clinic visit.',
  'It also builds trust. When people see that we come back, they are more likely to come to the next outreach, bring their families and take our advice seriously. Communities remember who keeps their word.',
  '## How you can help',
  'If you are a health worker, a student or simply someone who cares, you can volunteer at an outreach or help with follow-up calls. If you lead an organisation, you can partner with us to bring an outreach to a community you care about. And if you have attended one of our outreaches, the best thing you can do is answer when we call.',
  'Screening finds the problem. Staying in touch is how we help solve it. That is why we keep calling long after the canopy comes down.']

},
{
  slug: 'malaria-prevention-at-home',
  title: 'Simple ways to protect your family from malaria',
  category: 'Health Tips',
  date: 'Aug 10, 2026',
  author: 'TAZhealth Team',
  image: images.malariaTalk,
  excerpt: 'Malaria is preventable. A few everyday habits make a real difference, especially for children.',
  body: [
  'Malaria is so common in Nigeria that many of us treat it as a normal part of life. Almost everyone has had it, or knows someone who has it right now. But malaria is a serious illness, and it remains one of the leading causes of sickness and death in the country, especially among young children and pregnant women.',
  'The good news is that malaria is both preventable and treatable. A few simple habits at home can greatly reduce the chance that you or your family will fall sick, and knowing what to do when a fever starts can prevent a mild illness from becoming a dangerous one.',
  'Our very first outreach, at an orphanage in Abeokuta, was about exactly this: testing children and caregivers for malaria, talking about prevention and handing out mosquito nets. Here is what we shared with them.',
  '## How malaria spreads',
  'Malaria is caused by a parasite that is passed on through the bite of an infected female Anopheles mosquito. These mosquitoes usually bite between dusk and dawn, which is why protection at night is so important.',
  'Mosquitoes lay their eggs in still water, from puddles and blocked gutters to old tyres, buckets and bottle caps. The more stagnant water there is around a home, the more mosquitoes there will be.',
  '## Sleep under a treated net, every night',
  'An insecticide-treated mosquito net is one of the most effective ways to prevent malaria. It protects you while you sleep, and the insecticide kills mosquitoes that land on it.',
  'Make sure everyone in the household sleeps under a net every night, not only during the rainy season. Children under five and pregnant women should always be the first to get one. Tuck the edges of the net under the mattress or mat, and check it regularly for holes. Small tears can be tied or sewn closed.',
  'Wash the net gently with mild soap and dry it in the shade, as strong detergents and direct sunlight can weaken the insecticide.',
  '## Keep mosquitoes away from your home',
  'Walk around your compound once a week and get rid of anything that holds water. Cover water storage containers tightly, turn over empty buckets and bowls, clear blocked drains and cut back tall grass and bushes near the house.',
  'Where you can, fit screens or netting on windows and doors, and close them in the evening. Mosquito repellents, coils and indoor insecticide sprays can also help, especially in the hours before bed. Long sleeves and trousers in the evening give extra protection.',
  '## Test before you treat',
  'Not every fever is malaria. Typhoid, other infections and many other illnesses can feel very similar. Buying malaria drugs every time you feel hot or tired can waste money, delay the right treatment and help the parasite become resistant to medicine.',
  'If anyone in the family has a fever, get a malaria test at a clinic, pharmacy or health centre as soon as possible. A rapid diagnostic test takes only a few minutes and needs just a drop of blood.',
  '## If the test is positive',
  'Follow the treatment prescribed by a health worker. The recommended medicines for uncomplicated malaria in Nigeria are artemisinin-based combination therapies, often called ACTs. Take the full course exactly as directed, even if you start to feel better after a day or two. Stopping early can allow the infection to come back.',
  'Avoid older drugs such as chloroquine, which no longer work well against malaria in Nigeria, and be careful with unlabelled or unregistered medicines.',
  '## Danger signs that need urgent care',
  'Malaria can become severe very quickly, especially in children. Take someone to a hospital immediately if they have convulsions, are very drowsy or difficult to wake, cannot drink or breastfeed, keep vomiting everything, have difficulty breathing, have very pale palms or dark urine, or become confused. Do not wait to see if these signs get better at home.',
  '## Extra care during pregnancy',
  'Malaria in pregnancy can cause anaemia in the mother and low birth weight or early delivery for the baby. Pregnant women should attend antenatal clinic early and regularly, where they can receive preventive malaria treatment and advice. They should always sleep under a treated net.',
  '## Protecting each other',
  'Malaria prevention works best when a whole community takes part. When neighbours clear stagnant water together and every household uses nets, there are fewer mosquitoes for everyone.',
  'Share what you know with your family and friends, and if you have the chance, come to one of our outreaches for a free malaria test and a chat with our volunteers. A few simple habits can keep your family safe.']

}];
