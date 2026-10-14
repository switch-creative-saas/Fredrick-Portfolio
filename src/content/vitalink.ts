export interface VitalinkProduct {
  name: string;
  description: string;
}

export const vitalink = {
  name: 'VitaLink',
  previousName: 'Switch Health',
  summary: 'A healthcare operating system and infrastructure platform for Africa.',
  // TODO(fred): VitaLink website URL.
  website: null as string | null,
  // Copy rule: never describe VitaMind AI as diagnosing. Use "clinical decision support",
  // "flags", "surfaces", "assists clinicians".
  products: [
    { name: 'Health Identity', description: 'TODO(fred): one line on Health Identity.' },
    { name: 'EMR', description: 'TODO(fred): one line on the EMR.' },
    { name: 'Telemedicine', description: 'TODO(fred): one line on Telemedicine.' },
    { name: 'VitaMind AI', description: 'Clinical intelligence. TODO(fred): one line on how it assists clinicians.' },
    { name: 'VitaLink Sentinel', description: 'Disease surveillance. TODO(fred): one line on Sentinel.' },
    { name: 'Insurance', description: 'TODO(fred): one line on Insurance.' },
    { name: 'Patient App', description: 'TODO(fred): one line on the Patient App.' },
  ] satisfies VitalinkProduct[],
};
