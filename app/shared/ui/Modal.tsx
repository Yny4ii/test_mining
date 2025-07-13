'use client'
import React from 'react'
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/app/shared/ui/Dialog'
import { useRouter } from 'next/navigation'

interface ModalProps {
  children: React.ReactNode
  title: string
}

const Modal = ({ children, title }: ModalProps) => {
  const router = useRouter()
  const handleOpenChange = () => {
    router.back()
  }
  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

export default Modal
