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
  excerpt: 'Malaria can become life-threatening when treatment is delayed. These simple steps help keep your household safe.',
  body: [
  'For many families in Nigeria, malaria is not an unfamiliar disease. It can affect young and old, and it can become life-threatening when treatment is delayed. Fortunately, there are simple things you can do to protect your family from malaria.',
  'To protect against malaria, we first need to understand how it spreads. Malaria is caused by Plasmodium parasites and is mainly transmitted to humans through the bites of infected female Anopheles mosquitoes. This makes preventing mosquito bites an important part of malaria prevention.',
  '## 1. Sleep under an insecticide-treated net',
  'Make sure the net:',
  '- Covers the entire sleeping area',
  '- Does not have large holes',
  '- Is properly tucked in or secured',
  '- Is used consistently, especially at night',
  '## 2. Reduce mosquitoes around your home',
  'Mosquitoes breed in stagnant water, including water collected in:',
  '- Buckets',
  '- Old tyres',
  '- Uncovered containers',
  '- Flowerpots',
  '- Drains',
  'Keep your surroundings clean and practise good hygiene to reduce the number of mosquitoes.',
  '## 3. Use appropriate mosquito protection',
  'This includes:',
  '- Window and door screens',
  '- Protective clothing',
  '- Appropriate mosquito repellents',
  '- Properly maintained insecticide-treated nets',
  '## 4. Pay special attention to children and pregnant women',
  'Children and pregnant women are at greater risk of severe malaria. Families should follow recommended malaria prevention measures, and pregnant women should attend antenatal care, where appropriate preventive treatment can be provided.',
  '## 5. Take note of symptoms',
  'Symptoms of malaria include:',
  '- Fever',
  '- Chills',
  '- Headache',
  '- Weakness',
  '- Muscle aches',
  '- Nausea or vomiting',
  'However, if someone develops a fever or other concerning symptoms, seek medical care and testing rather than assuming it is malaria or treating it without proper evaluation.',
  '## 6. Complete prescribed treatment',
  'If you are being treated for malaria, follow the instructions given to you by a healthcare professional. Do not stop treatment simply because you begin to feel better.',
  '## Conclusion',
  'You don’t need to wait for malaria to affect your household before taking prevention seriously. Using a mosquito net, keeping a clean environment, using mosquito repellent, testing early and getting the right treatment on time are small steps that can make a big difference in preventing malaria in the first place.']

}];
