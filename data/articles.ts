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
  title: 'Why we keep calling after the outbreak teams leave',
  category: 'Health Tips',
  date: 'Aug 28, 2026',
  author: 'TAZhealth Team',
  image: images.phone,
  excerpt: 'An outbreak ending is not the same as the problem disappearing. Follow-up is how we know a community is truly safe.',
  body: [
  'When an outbreak is declared, communities often see an immediate response. Healthcare workers arrive, surveillance teams investigate cases, health education campaigns increase, and testing and treatment are stepped up. This is how people become more aware of the disease and how it spreads. Eventually, the outbreak response team leaves, but the disease doesn’t necessarily leave with them.',
  'This is why public health workers continue to call, monitor and follow up even after the headlines disappear.',
  'An outbreak ending is not the same as the problem disappearing. An outbreak may be considered controlled when cases fall below a certain level or transmission is interrupted, but that does not mean the risk has disappeared completely.',
  'Diseases can return when surveillance becomes weak, people stop reporting symptoms, vaccination coverage falls, communities become less health conscious, the environment changes to favour transmission, or health facilities become less prepared. That is why surveillance needs to continue.',
  '## What happens after the emergency?',
  'Public health teams still have a role in the community after an outbreak, to make sure the disease does not return:',
  '- Healthcare workers watch for new cases and unusual patterns of illness.',
  '- People who may have been exposed or infected are monitored.',
  '- Health authorities collect and analyse data to find out whether transmission is truly declining.',
  '- Local healthcare systems are strengthened.',
  '- Health information is shared with the community.',
  '## Involving the community',
  'Community members also play a major role after an outbreak. It is important that they can recognise and report unusual signs and symptoms early, before a larger crisis develops. That means paying attention to:',
  '- Unusual clusters of illness',
  '- Sudden increases in fever or other symptoms',
  '- Unexplained deaths',
  '- New infections in people who have had similar exposures',
  'Any concerns should be reported to the appropriate health authorities or a healthcare facility.',
  '## Conclusion',
  'Public health doesn’t end when the emergency vehicles leave. It continues through surveillance, prevention, education and community engagement. That follow-up call may seem unnecessary when everything appears to be back to normal, but it helps answer the real question: are we actually safe, or have we just stopped paying attention to the problem?',
  'Every community deserves a health system that keeps watching, learning and preparing long after the immediate danger has passed.']

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
