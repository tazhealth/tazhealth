import type { SmsMessage } from '../components/tazai/SmsThread';

export const englishThread: SmsMessage[] = [
{ from: 'taz', text: 'TAZhealth: Thank you for visiting our outreach today. We will check on you. Reply STOP to end messages.' },
{ from: 'patient', text: 'Thank you so much!' },
{ from: 'taz', text: 'TAZhealth: Hi Folake, how are you feeling today? Reply 1 if well, 2 if you need help.' },
{ from: 'patient', text: '1' }];


export const pidginThread: SmsMessage[] = [
{ from: 'taz', text: 'TAZhealth: Abeg no forget take your medicine today. Stay well o!' },
{ from: 'patient', text: 'I don take am. Thank you!' },
{ from: 'taz', text: 'TAZhealth: Well done! We go check your BP again for Saturday. See you there.' }];