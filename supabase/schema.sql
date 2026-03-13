-- =============================================
-- Engineering Vocabulary 1000 - Database Schema
-- Run this in Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ตาราง: vocabulary_sets (ชุดคำศัพท์)
CREATE TABLE IF NOT EXISTS vocabulary_sets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  language_pair TEXT NOT NULL DEFAULT 'en-th',
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  category TEXT NOT NULL DEFAULT 'general',
  icon_url TEXT,
  word_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ตาราง: vocabularies (คำศัพท์)
CREATE TABLE IF NOT EXISTS vocabularies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  set_id UUID NOT NULL REFERENCES vocabulary_sets(id) ON DELETE CASCADE,
  word TEXT NOT NULL,
  part_of_speech TEXT NOT NULL DEFAULT 'noun',
  meaning_th TEXT NOT NULL,
  meaning_en TEXT NOT NULL,
  example_en TEXT NOT NULL,
  example_th TEXT NOT NULL,
  audio_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ตาราง: set_stats (สถิติชุดคำศัพท์)
CREATE TABLE IF NOT EXISTS set_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  set_id UUID NOT NULL REFERENCES vocabulary_sets(id) ON DELETE CASCADE,
  likes INTEGER NOT NULL DEFAULT 0,
  shares INTEGER NOT NULL DEFAULT 0,
  UNIQUE(set_id)
);

-- ตาราง: user_progress (ความก้าวหน้าผู้ใช้)
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  vocabulary_id UUID NOT NULL REFERENCES vocabularies(id) ON DELETE CASCADE,
  set_id UUID NOT NULL REFERENCES vocabulary_sets(id) ON DELETE CASCADE,
  is_learned BOOLEAN NOT NULL DEFAULT FALSE,
  is_favorite BOOLEAN NOT NULL DEFAULT FALSE,
  quiz_correct INTEGER NOT NULL DEFAULT 0,
  quiz_wrong INTEGER NOT NULL DEFAULT 0,
  last_seen_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, vocabulary_id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_vocabularies_set_id ON vocabularies(set_id);
CREATE INDEX IF NOT EXISTS idx_vocabularies_order ON vocabularies(set_id, order_index);
CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_set ON user_progress(user_id, set_id);

-- Row Level Security (RLS)
ALTER TABLE vocabulary_sets ENABLE ROW LEVEL SECURITY;
ALTER TABLE vocabularies ENABLE ROW LEVEL SECURITY;
ALTER TABLE set_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Policies: Everyone can read vocabulary data
CREATE POLICY "Public read vocabulary_sets" ON vocabulary_sets FOR SELECT USING (true);
CREATE POLICY "Public read vocabularies" ON vocabularies FOR SELECT USING (true);
CREATE POLICY "Public read set_stats" ON set_stats FOR SELECT USING (true);

-- Policies: Users can manage their own progress
CREATE POLICY "Users read own progress" ON user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own progress" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own progress" ON user_progress FOR UPDATE USING (auth.uid() = user_id);

-- Policy: Anyone can increment likes/shares
CREATE POLICY "Public update set_stats" ON set_stats FOR UPDATE USING (true);
