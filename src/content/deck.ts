import type { DeckMeta, Slide } from '../slides/types'
import { introSlides } from './sections/intro'
import { claudePartnerSlides } from './sections/claude-partner'
import { claudeCapabilitiesSlides } from './sections/claude-capabilities'
import { accessingClaudeSlides } from './sections/accessing-claude'
import { startingConversationSlides } from './sections/starting-conversation'
import { writingPromptsSlides } from './sections/writing-prompts'
import { givingContextSlides } from './sections/giving-context'
import { refiningResponsesSlides } from './sections/refining-responses'
import { personalizingClaudeSlides } from './sections/personalizing-claude'
import { troubleshootingSlides } from './sections/troubleshooting'
import { iterationApproachSlides } from './sections/iteration-approach'
import { aiFluencySlides } from './sections/ai-fluency'
import { evalsSlides } from './sections/evals'
import { desktopAppOverviewSlides } from './sections/desktop-app-overview'
import { desktopChatSlides } from './sections/desktop-chat'
import { desktopCoworkSlides } from './sections/desktop-cowork'
import { desktopCodeSlides } from './sections/desktop-code'

export const meta: DeckMeta = {
  title: 'היכרות עם Claude',
  author: {
    name: 'Lirone Fitoussi',
    role: 'Full Stack | IT | DevOps | Automations',
    githubUrl: '#',
  },
}

export const slides: Slide[] = [
  ...introSlides,
  ...claudePartnerSlides,
  ...claudeCapabilitiesSlides,
  ...accessingClaudeSlides,
  ...startingConversationSlides,
  ...writingPromptsSlides,
  ...givingContextSlides,
  ...refiningResponsesSlides,
  ...personalizingClaudeSlides,
  ...troubleshootingSlides,
  ...iterationApproachSlides,
  ...aiFluencySlides,
  ...evalsSlides,
  ...desktopAppOverviewSlides,
  ...desktopChatSlides,
  ...desktopCoworkSlides,
  ...desktopCodeSlides,
]
