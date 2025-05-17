
import React from 'react';
import { Container } from '@/components/ui/container';
import ProfileEditor from '@/components/ProfileEditor';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
          <ProfileEditor />
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
