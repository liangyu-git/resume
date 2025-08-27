module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation changes
        'style',    // Code style changes (formatting, etc.)
        'refactor', // Code refactoring
        'perf',     // Performance improvements
        'test',     // Adding or updating tests
        'build',    // Build system or external dependencies
        'ci',       // CI/CD changes
        'chore',    // Other maintenance tasks
        'revert',   // Revert previous commit
        // Custom emoji types for better visual clarity
        '✨',       // New feature (feat)
        '🐛',       // Bug fix (fix)
        '📚',       // Documentation (docs)
        '🎨',       // Style/formatting (style)
        '♻️',       // Refactoring (refactor)
        '⚡',       // Performance (perf)
        '🧪',       // Testing (test)
        '🔧',       // Build/config (build)
        '👷',       // CI/CD (ci)
        '🧹',       // Chore (chore)
        '⏪',       // Revert (revert)
      ],
    ],
    'subject-case': [2, 'never', ['pascal-case', 'upper-case']],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 100],
  },
}