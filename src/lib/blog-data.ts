import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'demystifying-solar-panel-roi',
    title: 'Demystifying Solar Panel ROI: A Guide for Homeowners',
    date: '2024-07-20',
    author: 'Brenda Smith',
    image: 'solar-roi',
    summary: 'Thinking about going solar? This guide breaks down the return on investment for solar panels, helping you make an informed decision.',
    content: `
      <p>Investing in solar panels is a significant decision for any homeowner. While the environmental benefits are clear, the financial aspect—specifically the Return on Investment (ROI)—is often the deciding factor. In this guide, we'll break down how to calculate ROI, what factors influence it, and why it's more than just a numbers game.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">What is Solar ROI?</h3>
      <p>At its core, ROI measures the profitability of an investment. For solar panels, it's the point at which your savings on electricity bills surpass the total cost of the solar installation. After this point, your solar system generates pure profit in the form of free electricity.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Key Factors Influencing ROI</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Installation Cost:</strong> This is the biggest up-front factor. Costs vary based on system size, panel quality, and location.</li>
        <li><strong>Government Incentives:</strong> Tax credits, rebates, and grants can significantly reduce your initial outlay.</li>
        <li><strong>Electricity Rates:</strong> The higher your current utility rates, the faster your payback period will be.</li>
        <li><strong>Sunlight Exposure:</strong> More sun equals more power generation. South-facing roofs with minimal shade are ideal.</li>
      </ul>
      <p>By understanding these factors, you can get a clearer picture of when to expect a return on your solar investment. At A.J. Tech Solutions, we provide a detailed cost-benefit analysis for every potential installation, ensuring you have all the data you need.</p>
    `,
  },
  {
    slug: 'common-electrical-mistakes',
    title: '5 Common Electrical Mistakes DIY Enthusiasts Make',
    date: '2024-06-15',
    author: 'Diana Green',
    image: 'electrical-mistakes',
    summary: 'DIY projects can be rewarding, but electrical work is one area where mistakes can be dangerous. Here are 5 common pitfalls to avoid.',
    content: `
      <p>The satisfaction of a successfully completed DIY project is hard to beat. However, when it comes to electrical work, a small mistake can lead to big problems, including fire hazards and serious injury. Here are five common mistakes to avoid.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">1. Using the Wrong Wire Gauge</h3>
      <p>Wires are rated for a certain amperage. Using a wire that's too small for the circuit's load can cause it to overheat, creating a fire risk. Always match the wire gauge to the breaker's amperage.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">2. Overloading a Junction Box</h3>
      <p>Junction boxes have a limit to how many wires they can safely contain. Over-stuffing a box can lead to damaged wires, short circuits, and heat buildup.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">3. Reversing Hot and Neutral Wires</h3>
      <p>This is a simple but dangerous mistake. It can cause devices to remain energized even when switched off, posing a serious shock risk.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">4. Poor Connections</h3>
      <p>Loose connections at terminals can create electrical arcs, which are a major cause of electrical fires. Ensure all connections are tight and secure.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">5. Not Grounding Properly</h3>
      <p>Grounding is a critical safety feature that protects against electrical shocks. Skipping or improperly connecting a ground wire is a recipe for disaster.</p>
      <p class="mt-4">When in doubt, always call a professional. The team at A.J. Tech Solutions is here to ensure your electrical work is done safely and correctly.</p>
    `,
  },
];
