import type { AgentConfig } from "@opencode-ai/sdk"
import { sisyphusAgent } from "./sisyphus"
import { oracleAgent } from "./oracle"
import { librarianAgent } from "./librarian"
import { exploreAgent } from "./explore"
import { frontendUiUxEngineerAgent } from "./frontend-ui-ux-engineer"
import { documentWriterAgent } from "./document-writer"
import { multimodalLookerAgent } from "./multimodal-looker"
import { codebaseAnalyzer } from "./codebase-analyzer"
import { specWriter } from "./spec-writer"
import { specRefiner } from "./spec-refiner"
import { featureAnalyzer } from "./feature-analyzer"
import { featureEnhancer } from "./feature-enhancer"
import { featureValidator } from "./feature-validator"

export const builtinAgents: Record<string, AgentConfig> = {
  Sisyphus: sisyphusAgent,
  oracle: oracleAgent,
  librarian: librarianAgent,
  explore: exploreAgent,
  "frontend-ui-ux-engineer": frontendUiUxEngineerAgent,
  "document-writer": documentWriterAgent,
  "multimodal-looker": multimodalLookerAgent,
  "codebase-analyzer": codebaseAnalyzer,
  "spec-writer": specWriter,
  "spec-refiner": specRefiner,
  "feature-analyzer": featureAnalyzer,
  "feature-enhancer": featureEnhancer,
  "feature-validator": featureValidator,
}

export * from "./types"
export { createBuiltinAgents } from "./utils"
export type { AvailableAgent } from "./sisyphus-prompt-builder"
