export interface VocabularySet {
  id: string
  title: string
  description: string | null
  language_pair: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  icon_url: string | null
  word_count: number
  created_at: string
}

export interface Vocabulary {
  id: string
  set_id: string
  word: string
  part_of_speech: string
  meaning_th: string
  meaning_en: string
  example_en: string
  example_th: string
  audio_url: string | null
  order_index: number
  created_at: string
}

export interface UserProgress {
  id: string
  user_id: string
  vocabulary_id: string
  set_id: string
  is_learned: boolean
  is_favorite: boolean
  quiz_correct: number
  quiz_wrong: number
  last_seen_at: string | null
  created_at: string
}

export interface SetStats {
  id: string
  set_id: string
  likes: number
  shares: number
}

export interface Database {
  public: {
    Tables: {
      vocabulary_sets: {
        Row: VocabularySet
        Insert: Omit<VocabularySet, 'id' | 'created_at'>
        Update: Partial<Omit<VocabularySet, 'id' | 'created_at'>>
      }
      vocabularies: {
        Row: Vocabulary
        Insert: Omit<Vocabulary, 'id' | 'created_at'>
        Update: Partial<Omit<Vocabulary, 'id' | 'created_at'>>
      }
      user_progress: {
        Row: UserProgress
        Insert: Omit<UserProgress, 'id' | 'created_at'>
        Update: Partial<Omit<UserProgress, 'id' | 'created_at'>>
      }
      set_stats: {
        Row: SetStats
        Insert: Omit<SetStats, 'id'>
        Update: Partial<Omit<SetStats, 'id'>>
      }
    }
  }
}
