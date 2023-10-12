const entity = {
  invalid_input: 'Input non valido. La lista dei valori non deve essere vuota.',
  create_failed: 'Impossibile creare {{name}}.',
  db_constraint_violated: 'Vincolo del database violato.',
  not_exists: '{{name}} non esiste.',
  not_exists_with_id: '{{name}} con ID `{{id}}` non esiste.',
  not_found: 'La risorsa non esiste.',
  /** UNTRANSLATED */
  duplicate_value_of_unique_field: 'The value of the unique field `{{field}}` is duplicated.',
};

export default Object.freeze(entity);
