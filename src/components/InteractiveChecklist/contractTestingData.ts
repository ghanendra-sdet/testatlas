import { ChecklistSection } from './jmeterData';

export const contractTestingChecklistData: ChecklistSection[] = [
  {
    title: "1. Contract Ownership & Definition",
    icon: "🤝",
    items: [
      {
        id: "contract_owned_by_consumer",
        text: "Contract expectations are written and owned by the consumer, not the provider.",
        example: "The checkout service (consumer) defines exactly which fields it needs from the payments service (provider) response — not the other way around."
      },
      {
        id: "contract_explicit_schema",
        text: "Every field's type, nullability, and format is explicitly declared, not inferred from one example payload.",
        example: "`amount` is documented as a string in minor units (`\"1050\"` for $10.50), not silently assumed to be a float.",
        refLink: "/learning-paths/api-testing/headers-parameters-and-payload-validation",
        refText: "Headers, Parameters & Payload Validation"
      },
      {
        id: "contract_versioned",
        text: "Each contract is versioned and tied to a specific consumer/provider pair.",
        example: "`checkout-service-v2` consumes `payments-service-v3` — the pairing itself is a trackable artifact, not folklore."
      }
    ]
  },
  {
    title: "2. Consumer-Side Tests",
    icon: "🧪",
    items: [
      {
        id: "consumer_mocked_provider",
        text: "Consumer tests run against a contract-generated mock of the provider, not a live call.",
        example: "Pact (or an equivalent) intercepts the HTTP call and returns exactly the mocked contract response — the real payments service is never hit in a consumer test."
      },
      {
        id: "consumer_records_expectations",
        text: "Every consumer interaction the code actually depends on is recorded as a distinct contract interaction.",
        example: "A \"get payment status = FAILED\" case is a separate recorded interaction from \"get payment status = SETTLED\" — not folded into one generic happy-path mock."
      },
      {
        id: "consumer_negative_cases",
        text: "Consumer-side contract interactions include realistic error/edge responses, not only 200 OK.",
        example: "A 404 for an unknown payment ID and a 503 during provider maintenance are both recorded interactions, not just the success case."
      }
    ]
  },
  {
    title: "3. Provider-Side Verification",
    icon: "✅",
    items: [
      {
        id: "provider_verifies_against_contract",
        text: "The provider runs a verification step that replays every consumer-recorded interaction against its real implementation.",
        example: "The payments service's CI pipeline pulls every consumer's contract and asserts its actual responses still match, before any deploy."
      },
      {
        id: "provider_states_setup",
        text: "Provider verification sets up the exact state each interaction expects, not shared fixture data.",
        example: "Verifying the \"payment status = FAILED\" interaction actually seeds a failed payment in the provider's test database first."
      },
      {
        id: "provider_breaking_change_blocked",
        text: "A provider change that breaks any consumer's contract fails CI before merge, not after deploy.",
        example: "Renaming a field from `txn_id` to `transactionId` fails the provider's own build the moment a consumer contract still expects `txn_id`."
      }
    ]
  },
  {
    title: "4. Contract Broker & Change Visibility",
    icon: "📡",
    items: [
      {
        id: "broker_central_registry",
        text: "Contracts are published to a shared, queryable location — not scattered across teams' own repos.",
        example: "Both the checkout team and payments team see the current, live contract state via a Pact Broker (or equivalent), not by asking in Slack."
      },
      {
        id: "broker_can_i_deploy",
        text: "Deployability is checked automatically against the broker before either side ships.",
        example: "A \"can-i-deploy\" gate blocks the payments service's release if any consumer hasn't yet verified compatibility with the new version."
      },
      {
        id: "broker_webhooks",
        text: "A provider change automatically notifies/triggers re-verification for every affected consumer.",
        example: "Publishing a new payments-service contract kicks off checkout-service's CI to re-verify against it, without a human remembering to ping them."
      }
    ]
  },
  {
    title: "5. Scope, Units & Type Safety",
    icon: "📏",
    items: [
      {
        id: "scope_units_explicit",
        text: "Numeric fields with a unit are explicit about which unit, not just a bare number.",
        example: "`thrust_impulse_newton_seconds` rather than an ambiguous `impulse` field — the exact class of defect that destroyed the Mars Climate Orbiter."
      },
      {
        id: "scope_schema_linting",
        text: "A schema/type linter runs in CI to catch unit or type drift between consumer expectation and provider reality.",
        example: "An automated check flags if a provider's OpenAPI spec changes a field from integer to string without a corresponding contract update.",
        refLink: "/learning-paths/api-testing/testing-service-integrations",
        refText: "Testing Service Integrations"
      },
      {
        id: "scope_not_a_substitute",
        text: "Contract tests are understood as a complement to, not a replacement for, end-to-end integration tests.",
        example: "A handful of real end-to-end smoke tests still run against a live staging environment; contract tests exist to catch drift fast and cheap, not to be the only integration signal."
      }
    ]
  }
];
