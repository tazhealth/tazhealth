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

// Body lines starting with "## " render as subheadings.
export const articles: Article[] = [
{
  slug: 'know-your-blood-pressure',
  title: 'High blood pressure has no symptoms. Here’s why you should check yours.',
  category: 'Health Tips',
  date: 'Sep 12, 2026',
  author: 'TAZhealth Team',
  image: images.hero,
  excerpt: 'Many people we screen feel perfectly fine, yet their readings are dangerously high.',
  body: [
  'At almost every outreach, we meet someone who feels completely well but has a blood pressure reading that should send them straight to a clinic. They came for a malaria test, or to keep a friend company, or because they saw the canopy on their way to the market. They had no headache, no dizziness, nothing to suggest that anything was wrong.',
  'That is what makes high blood pressure, or hypertension, so dangerous. It often has no warning signs at all, which is why health workers call it a silent condition. Many people only find out they have it after a stroke or a heart attack, when the damage has already been done.',
  '## What blood pressure actually means',
  'Every time your heart beats, it pushes blood through your arteries. Blood pressure is the force of that blood against the walls of the arteries. It is written as two numbers, for example 120/80. The top number is the pressure when the heart beats, and the bottom number is the pressure when the heart rests between beats.',
  'A reading below 120/80 is generally considered healthy. A reading of 140/90 or higher, found on more than one occasion, usually means high blood pressure. Readings in between are a signal to pay attention and make changes before things get worse.',
  'A single high reading does not always mean you have hypertension. Stress, rushing to the screening point or a cup of strong coffee can push your numbers up for a while. That is why a health worker will often ask you to rest and check again, or to come back for another reading on a different day.',
  '## Why it matters so much',
  'When your blood pressure stays high for months and years, it slowly damages your blood vessels and your organs. The heart has to work harder, the arteries become stiff, and small vessels in the brain, eyes and kidneys can be harmed.',
  'Over time, this raises the risk of stroke, heart attack, heart failure, kidney disease and problems with eyesight. These are some of the most common causes of serious illness and early death among adults in Nigeria, and many of them can be prevented if high blood pressure is found and treated early.',
  '## Who should check, and how often',
  'Every adult should have their blood pressure checked at least once a year, even if they feel well. You should check more often if you are over 40, if you are overweight, if you have diabetes or kidney disease, if you are pregnant, or if a parent, brother or sister has high blood pressure.',
  'Checking is quick and painless. It takes a few minutes at a clinic, a pharmacy or a free outreach like ours. If you have a home blood pressure monitor, sit quietly for five minutes first, keep your feet flat on the floor and your arm resting at the level of your heart, and write down each reading so you can show your health worker.',
  '## If your reading is high',
  'Do not panic, but do not ignore it either. See a doctor or nurse, who may recheck your pressure, ask about your health history and suggest tests. If you are given medication, take it every day as prescribed, even when you feel fine. Blood pressure medicine works by keeping your numbers steady, and it only helps while you keep taking it.',
  'Never stop, reduce or change your medication on your own, and be careful with herbal mixtures that promise to cure hypertension. Some can interact with your medicine or harm your kidneys. If cost is a problem, tell your health worker, because there are often cheaper options that work just as well.',
  '## Everyday habits that help',
  'Medication is only part of the picture. Small, steady changes in daily life can lower blood pressure and protect your heart.',
  'Cut down on salt. Much of the salt we eat comes from seasoning cubes, processed foods and snacks, not just the salt shaker. Try using less seasoning when cooking and flavouring food with onions, pepper, garlic, ginger and local spices instead.',
  'Eat more fruit and vegetables. Leafy greens, beans, oranges, bananas and other fresh produce are good for your heart. Choose whole grains where you can, and go easy on fried foods and fatty meat.',
  'Move your body. Aim for at least 30 minutes of activity most days of the week. Brisk walking, dancing, cycling or climbing stairs all count, and you do not need a gym.',
  'Limit alcohol, and stop smoking if you smoke. Both raise blood pressure and damage your blood vessels. Getting enough sleep and finding healthy ways to handle stress also make a difference.',
  '## Know the danger signs',
  'Very high blood pressure can sometimes cause a medical emergency. Go to a hospital immediately if you or someone near you has a sudden severe headache, chest pain, difficulty breathing, blurred vision, confusion, or weakness or numbness on one side of the body. These can be signs of a stroke or heart attack, and every minute counts.',
  '## The easiest step is the first one',
  'High blood pressure is common, but it is also one of the easiest health problems to find. All it takes is a quick check. If you have not had your blood pressure measured in the last year, make it a priority, and encourage your parents, your neighbours and your friends to do the same.',
  'At our outreaches, blood pressure checks are always free. Come and see us, bring someone with you, and let us help you know your numbers.']

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
