# Comment Standards

This document outlines the professional commenting standards for this project. Follow these guidelines to maintain clean, meaningful, and professional code documentation.

## Core Principles

### 1. Explain Why, Not What
- Comments should explain the reasoning behind code decisions
- Avoid restating what the code obviously does
- Focus on business logic, architectural decisions, and implementation rationale

### 2. Professional Tone
- Use clear, concise, and professional language
- Avoid casual expressions, emojis in comments (logging is acceptable)
- Write for future developers who need to understand and maintain the code

### 3. Strategic Placement
- Comments belong at the **start of files** and **start of functions/methods**
- Avoid scattered inline comments unless absolutely necessary
- Group related functionality with appropriate section headers

## What to Comment

### ❌ Avoid Commenting

1. **Obvious Code**
   ```rust
   // BAD: Check for errors first
   if let Some(error) = response.errs.get(lst_symbol) {
   
   // BAD: Get APY value for this LST  
   let apy_value = response.apys.get(lst_symbol)
   
   // BAD: Convert string to BigDecimal
   let tvl_value = BigDecimal::from_str(tvl_str)
   ```

2. **Simple Variable Assignments**
   ```rust
   // BAD: Set record count
   let record_count = records.len();
   
   // BAD: Create URL
   let url = format!("{}/v1/apy", base_url);
   ```

3. **Basic Control Flow**
   ```rust
   // BAD: Loop through all records
   for record in records {
   
   // BAD: If successful
   if result.is_ok() {
   ```

## Language-Specific Guidelines

### Rust
- Use `///` for public API documentation
- Use `//!` for module-level docs (alternative to `/*!`)
- Document error conditions and `Result` types
- Explain `unsafe` code blocks thoroughly
- Comment complex lifetime relationships

### JavaScript/TypeScript
- Use JSDoc format for functions: `/** */`
- Document parameter and return types clearly
- Explain async/await patterns and Promise handling
- Comment complex closures and callbacks

### Python
- Use docstrings for modules, classes, and functions
- Follow Google or Sphinx docstring conventions
- Document exceptions that can be raised
- Explain complex decorators and metaclasses

### SQL
- Comment complex queries and joins
- Explain performance optimizations
- Document index usage and query plans
- Comment stored procedures and triggers

## Review Checklist

Before committing code, ensure:

- [ ] File has appropriate header documentation
- [ ] All public functions have clear documentation
- [ ] Complex business logic is explained
- [ ] No obvious or redundant comments remain
- [ ] Comments use professional language
- [ ] Documentation explains *why*, not just *what*
- [ ] API limitations and workarounds are documented
- [ ] Error handling approaches are clear

## Maintenance

- Review and update comments when code changes
- Remove outdated comments immediately
- Ensure comments remain accurate and helpful
- Regularly audit codebase for comment quality during code reviews

---

*Remember: Good code is self-documenting, but great code explains its intentions and design decisions.* 